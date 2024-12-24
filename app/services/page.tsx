// app/services/page.tsx
import OurServices from "@/components/shared/OurServices";
import { services } from "@/constants";

const Services = () => {
  return (
    <main className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-extrabold text-gray-800">Our Services</h1>
        <p className="mt-4 text-xl text-gray-600">
          At BEZRAH, we provide innovative and sustainable solutions to promote
          greener, healthier environments. Our expertise focuses on Urban
          Farming, Sustainable Building Materials, and Consultation & Design,
          offering tailored strategies that empower communities and align with
          global sustainability goals
        </p>

        {/* Services Grid */}
        <OurServices services={services} />
      </div>
    </main>
  );
};

export default Services;
