// app/services/page.tsx
import OurServices from "@/components/shared/OurServices";
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
        <OurServices services={services} />
      </div>
    </main>
  );
};

export default Services;
