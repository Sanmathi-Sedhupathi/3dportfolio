import { services } from "@/constants";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="mt-14 flex flex-col items-center">
      <h2 className={`sectionHeadText text-center`}>Services</h2>
      <p className="text-center text-gray-600 max-w-xl">
        I offer a range of services to help you achieve your goals.<br />
        Explore what I can do for you below.
      </p>
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;