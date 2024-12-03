import { teamData } from "@/constants";
import { Tooltip } from "@mui/material";
import { IconUserCircle } from "@tabler/icons-react";
import React from "react";

const page = () => {
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <div className="content-section mt-16">
          <h2 className="text-4xl font-semibold text-gray-900">
            Meet Our Team
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-700">{member.position}</p>
                <Tooltip title="Connect with me" arrow>
                  <IconUserCircle className="mt-4 text-[#a0b59f] text-3xl mx-auto cursor-pointer" />
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
