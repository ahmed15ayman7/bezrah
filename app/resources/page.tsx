import React from "react";
import PdfViewer from "@/components/shared/PdfViewer";
import { Button } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const researchData = [
  {
    section: "ARCHITECTURE",
    items: [
      // {
      //   name: "Green Roof Design",
      //   description: "Detailed research on architectural green roof designs.",
      //   fileUrl: "/Green-Roof-Design.pdf", // Path to your PDF
      // },
      {
        name: "Agriculture BEZRAH",
        description: `Surface cultivation: It is intended to exploit empty spaces on roofs in order to grow plants such as vegetables, fruits, ornamental plants and others. It is also considered one of the latest means and methods used to preserve the environment and reduce the emission of greenhouse gases. Objectives of roof planting: 1- Improving air quality. 2- Reducing the heat of the roofs of houses. 3- Achieves a high percentage of food self-sufficiency. 4- It can be a source of income (yielding a material return) 5- It gives an aesthetic appearance. 6- Preserves the environment, as it works to reduce the emission of greenhouse gases and global warming, in addition to their positive impact on climate change. 7- Feeling comfortable in the presence of a green space.`,
        fileUrl: "/Agriculture-BEZRAH.pdf",
        img: "/images/pdf1.png",
      },
    ],
  },
  {
    section: "AGRICULTURAL",
    items: [
      {
        name: "Agriculture Bezrah 2",
        description: `At BEZRAH, we believe cities can become places where nature thrives, not just
        where concrete dominates. Urban farming gives us the tools to turn unused spaces
        like rooftops, small yards, or even balconies into areas that grow fresh, healthy
        food.
        We aim to make farming in the city simple and sustainable, helping people connect
        with the environment while solving everyday problems like food shortages and
        pollution.
        This report reflects our dedication to promoting urban farming as a practical and
        sustainable way forward. We will start by looking at the bigger picture—how
        urban agriculture can address global challenges like climate change and food
        shortages while improving the quality of life for city residents.
        Next, we explore specific methods, such as aquaponics, hydroponics, and
        composting, to understand how they work and how they can be adapted to fit into
        urban spaces effectively.`,
        fileUrl: "/Agriculture.Bezrah.pdf",
        img: "/images/pdf2.png",
      },
    ],
  },
  // {
  //   section: "TECHNICAL",
  //   items: [
  //     {
  //       name: "Technical Innovations",
  //       description:
  //         "Research on technical innovations in green infrastructure.",
  //       fileUrl: "/Technical-Innovations.pdf", // Path to your PDF
  //     },
  //   ],
  // },
];

const PdfPage = () => {
  return (
    <div className="bg-white pt-20 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Research Library
      </h1>

      {researchData.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {category.section}
          </h2>
          <ul className="space-y-4">
            {category.items.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-row bg-gray-50 p-4 rounded-lg shadow-md"
              >
                {/* Section 1: Details */}
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex gap-2 items-center">
                    {/* Open in browser button */}
                    <Button
                      href={item.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      color="primary"
                      className="max-sm:text-[10px]"
                    >
                      Open PDF
                    </Button>
                    {/* Download button */}
                    <Button
                      variant="contained"
                      className="bg-gradient-to-r from-[#4ebc78] via-[#4ebc78] to-[#4ebc78] text-white max-sm:text-[10px] flex gap-1 "
                      href={item.fileUrl}
                      download
                    >
                      <CloudDownloadIcon /> PDF
                    </Button>
                  </div>
                </div>

                {/* Section 2: Image */}
                <div className="w-1/3 flex justify-center items-center">
                  <img
                    src={item.img} // ضع مسار الصورة هنا
                    alt={`${item.name} preview`}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PdfPage;
