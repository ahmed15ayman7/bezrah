import React from "react";
import PdfViewer from "@/components/shared/PdfViewer";

const PdfPage = () => {
  const fileUrl = "/Agriculture-BEZRAH.pdf"; // Path to your PDF file
  const fileUrl2 = "/Agriculture.Bezrah.pdf"; // Path to your PDF file

  return (
    <div className="bg-white pt-20">
      <PdfViewer fileUrl={fileUrl} />

      <PdfViewer fileUrl={fileUrl2} />
    </div>
  );
};

export default PdfPage;
