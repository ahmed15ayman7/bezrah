"use client";

import React, { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import { Button, Typography, Box, CircularProgress } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
// Set the worker source
GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.9.155/build/pdf.worker.min.mjs`;

type PdfViewerProps = {
  fileUrl: string;
  ist?: boolean;
};

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl, ist }) => {
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page to display
  const [loading, setLoading] = useState<boolean>(true);
  const [pdfInstance, setPdfInstance] = useState<any>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        setLoading(true);

        // Load PDF document
        const pdf = await getDocument(fileUrl).promise;
        setPdfInstance(pdf);
        setPageCount(pdf.numPages);
      } catch (error) {
        console.error("Error loading PDF:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPdf();
  }, [fileUrl]);

  const renderPage = async (pageNumber: number) => {
    if (!pdfInstance || !canvasRef.current) return;

    try {
      const page = await pdfInstance.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.style.width = "80%"; // Set canvas width to 80% of the container
      canvas.style.height = "auto"; // Maintain aspect ratio
      canvas.style.marginBottom = "16px"; // Add spacing between pages
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({ canvasContext: context!, viewport }).promise;
    } catch (error) {
      console.error(`Error rendering page ${pageNumber}:`, error);
    }
  };

  useEffect(() => {
    renderPage(currentPage);
  }, [currentPage, pdfInstance]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount));
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
        <Typography variant="body1">
          Page {currentPage} of {pageCount}
        </Typography>
        <Box>
          {/* Download Button */}
          <Button
            variant="contained"
            className="bg-gradient-to-r from-[#384131] via-[#2a3c2f] to-[#4a6a52] text-white max-sm:text-[10px] flex gap-1 mb-2"
            href={fileUrl}
            download
          >
            <CloudDownloadIcon /> PDF
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePreviousPage}
            className="max-sm:text-[10px]"
            disabled={currentPage <= 1}
            style={{ marginRight: "8px" }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="max-sm:text-[10px]"
            onClick={handleNextPage}
            disabled={currentPage >= pageCount}
            style={{ marginRight: "8px" }}
          >
            Next
          </Button>
        </Box>
      </Box>

      {/* Page Display */}
      <div
        className="flex items-center justify-center w-full h-auto bg-white rounded-md shadow-lg p-4 overflow-auto"
        style={{ maxHeight: ist ? "80vh" : "200vh" }}
      >
        {loading ? <CircularProgress /> : <canvas ref={canvasRef} />}
      </div>
    </div>
  );
};

export default PdfViewer;
