import React from "react";

const OurServices = ({
  services,
}: {
  services: { Icon: any; title: string; text: string[] }[];
}) => {
  return (
    <div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map(({ Icon, title, text }) => (
          <div
            key={title}
            className=" bg-gradient-to-bl to-[#ffffff27] via-[#ffffff01] from-[#ffffff33] p-8 shadow-lg rounded-lg transition-all hover:shadow-2xl hover:scale-105 backdrop-blur-lg transform hover:rotate-2"
          >
            <Icon className="text-[#4ebc78] text-4xl mb-4 transition-transform transform hover:scale-125 hover:rotate-12" />
            <h3 className="text-2xl font-semibold">{title}</h3>
            {text.map((tx) => (
              <p key={tx} className="mt-4 text-gray-500">
                {tx}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
