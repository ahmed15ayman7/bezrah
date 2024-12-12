"use client";

import React, { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import { Button, Typography, Box, CircularProgress } from "@mui/material";

// Set the worker source
GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.9.155/build/pdf.worker.min.mjs`;

type PdfViewerProps = {
  fileUrl: string;
};

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        setLoading(true);

        // Load PDF document
        const pdf = await getDocument(fileUrl).promise;
        setPageCount(pdf.numPages);

        // Load current page
        const page = await pdf.getPage(currentPage);

        // Render page on canvas
        const canvas = canvasRef.current;
        if (canvas) {
          const context = canvas.getContext("2d");
          const viewport = page.getViewport({ scale: 1.5 });

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          await page.render({ canvasContext: context!, viewport }).promise;
        }
      } catch (error) {
        console.error("Error loading or rendering PDF:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPdf();
  }, [fileUrl, currentPage]);

  const nextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage((prevPage) => prevPage + 1); // Properly updates state
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1); // Properly updates state
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-md shadow-lg">
      {/* Toolbar */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        className="mb-4 p-2 bg-white rounded-md shadow"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={prevPage}
          disabled={currentPage <= 1}
        >
          Previous
        </Button>
        <Typography variant="body1">
          Page {currentPage} of {pageCount}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={nextPage}
          disabled={currentPage >= pageCount}
        >
          Next
        </Button>
      </Box>

      {/* Canvas for PDF rendering */}
      <div className="flex justify-center items-center w-full h-auto bg-white rounded-md shadow-lg p-4">
        {loading ? (
          <CircularProgress />
        ) : (
          <canvas ref={canvasRef} className="max-w-full" />
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
