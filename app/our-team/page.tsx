import { founder, teamData } from "@/constants";
import { Tooltip } from "@mui/material";
import { IconUserCircle } from "@tabler/icons-react";
import React from "react";

const page = () => {
  return (
    
    // <main className="py-16 bg-white">
    //   <div className="container mx-auto text-center px-4">
    //     <div className="content-section mt-10">
    //       <h2 className="text-4xl mb-20 font-semibold text-gray-900">
    //         Meet Our Team
    //       </h2>
    //       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //         {teamData.map((member, index) => (
    //           <div
    //             key={index}
    //             className={`${
    //               index === 1
    //                 ? " -translate-y-10 border-2 border-[#4ebc78]"
    //                 : "hover:-translate-y-10 hover:border-2 max-sm:order-first hover:border-[#4ebc78]"
    //             }  bg-gray-50 shadow-lg rounded-lg flex p-1  text-center hover:shadow-xl transition-all duration-1000`}
    //           >
    //             <img
    //               src={member.image}
    //               alt={member.name}
    //               className="w-40 h-40 mx-auto rounded-lg mb-4"
    //             />
    //             <div className="p-1  flex flex-col justify-between">
    //               <h4 className="text-lg font-semibold text-gray-900">
    //                 {member.name}
    //               </h4>
    //               <div className="p-1  flex flex-col gap-1">
    //                 <p className="text-gray-700">{member.position}</p>
    //                 <Tooltip
    //                   title={
    //                     index === 1
    //                       ? "Mohamed Alhoussiny is a senior architecture student and sustainability advocate, passionate about empowering youth and addressing environmental challenges in Egypt. As the founder of the BEZRAH project, Mohamed is dedicated to promoting green solutions through education, rooftop farming, and sustainable building practices. He has participated in the SUSI Economic Empowerment program, gaining international exposure to entrepreneurship, public policy, and leadership. With a strong background in youth leadership, Mohamed actively seeks to create opportunities for young people, particularly in rural areas, by increasing their environmental awareness and fostering green job prospects. His goal is to make a lasting impact on Egypt's youth and the environment through innovative, community-driven initiatives."
    //                       : "Connect with me"
    //                   }
    //                   arrow
    //                 >
    //                   <IconUserCircle className="mt-4 text-[#4ebc78] text-3xl mx-auto cursor-pointer" />
    //                 </Tooltip>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <main className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        {/* Founder Section */}
        <section className="founder-section mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-8">Founder</h2>
          <div className="bg-gray-50 shadow-lg rounded-lg p-8 text-left">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-40 h-40 rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {founder.name}
                </h3>
                <p className="text-gray-700 font-medium">{founder.position}</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {founder.bio}
                </p>
                <a
                  href={`mailto:${founder.contact}`}
                  className="text-[#013820] hover:text-[#013820]"
                >
                  <strong>Contact:</strong> {founder.contact}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="text-4xl font-semibold text-gray-900 mb-10">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg rounded-lg p-4 flex  justify-between max-sm:block hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-lg mb-4"
                />
                <div className="flex grow flex-col">
                  <h4 className="text-lg font-semibold text-gray-900 max-sm:text-[14px]">
                    {member.name}
                  </h4>
                  <p className="text-gray-700 max-sm:text-[13px]">
                    {member.position}
                  </p>
                  <Tooltip title="Connect with me" arrow>
                    <a
                      href={`mailto:${member.contact}`}
                      className="inline-block mt-4"
                    >
                      <IconUserCircle className="text-[#4ebc78] text-3xl mx-auto cursor-pointer" />
                    </a>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
