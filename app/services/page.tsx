// app/services/page.tsx
import { services } from "@/constants";

const Services = () => {
  return (
    <main className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-800">Our Services</h1>
        <p className="mt-4 text-xl text-gray-600">
          We provide innovative green roofing solutions to improve the
          environment and aesthetics of your property.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map(({ Icon, title, text }) => (
            <div
              key={title}
              className=" bg-gradient-to-bl to-[#ffffff27] via-[#ffffff01] from-[#ffffff33] p-8 shadow-lg rounded-lg transition-all hover:shadow-2xl hover:scale-105 backdrop-blur-lg transform hover:rotate-2"
            >
              <Icon className="text-[#a0b59f] text-4xl mb-4 transition-transform transform hover:scale-125 hover:rotate-12" />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
