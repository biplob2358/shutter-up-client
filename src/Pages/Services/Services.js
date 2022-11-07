import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCart from "../ServicesCart/ServiceCart";

const Services = () => {
  const services = useLoaderData();

  return (
    <div>
      <h2>This is all services</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;