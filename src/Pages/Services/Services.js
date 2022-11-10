import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

import ServiceCart from "../ServicesCart/ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useTitle("Services");

  useEffect(() => {
    const url = "http://localhost:5000/services";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="grid min-h-screen content-center">
        <div className="w-16 h-16 mx-auto border-4  border-dashed rounded-full animate-spin dark:border-red-400"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-5xl font-semibold mb-4 text-center underline">
        All services
      </h2>
      <div className="grid lg:grid-cols-3  md:grid-cols-2">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
