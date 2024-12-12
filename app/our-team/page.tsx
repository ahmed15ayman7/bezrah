import { teamData } from "@/constants";
import { Tooltip } from "@mui/material";
import { IconUserCircle } from "@tabler/icons-react";
import React from "react";

const page = () => {
  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        <div className="content-section mt-10">
          <h2 className="text-4xl mb-20 font-semibold text-gray-900">
            Meet Our Team
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <div
                key={index}
                className={`${
                  index === 1
                    ? " -translate-y-10 border-2 border-[#778976]"
                    : "hover:-translate-y-10 hover:border-2 max-sm:order-first hover:border-[#778976]"
                }  bg-gray-50 shadow-lg rounded-lg flex p-1  text-center hover:shadow-xl transition-all duration-1000`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 mx-auto rounded-lg mb-4"
                />
                <div className="p-1  flex flex-col justify-between">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h4>
                  <div className="p-1  flex flex-col gap-1">
                    <p className="text-gray-700">{member.position}</p>
                    <Tooltip
                      title={
                        index === 1
                          ? "Mohamed Alhoussiny is a senior architecture student and sustainability advocate, passionate about empowering youth and addressing environmental challenges in Egypt. As the founder of the BEZRAH project, Mohamed is dedicated to promoting green solutions through education, rooftop farming, and sustainable building practices. He has participated in the SUSI Economic Empowerment program, gaining international exposure to entrepreneurship, public policy, and leadership. With a strong background in youth leadership, Mohamed actively seeks to create opportunities for young people, particularly in rural areas, by increasing their environmental awareness and fostering green job prospects. His goal is to make a lasting impact on Egypt's youth and the environment through innovative, community-driven initiatives."
                          : "Connect with me"
                      }
                      arrow
                    >
                      <IconUserCircle className="mt-4 text-[#a0b59f] text-3xl mx-auto cursor-pointer" />
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
