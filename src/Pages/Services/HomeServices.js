import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCart from "../ServicesCart/ServiceCart";

const HomeServices = () => {
  const servicesHome = useLoaderData();
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold">Current Packages</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 g-4 ">
          {servicesHome.map((service) => (
            <ServiceCart key={service._id} service={service}></ServiceCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
