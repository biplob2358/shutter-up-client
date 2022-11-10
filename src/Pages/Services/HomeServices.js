import React, { useEffect, useState } from "react";

import ServiceCart from "../ServicesCart/ServiceCart";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  const [size, setSize] = useState(3);

  useEffect(() => {
    const url = `https://shutter-up-server-mu.vercel.app/services?size=${size}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [size]);

  return (
    <div>
      <div className="text-center ">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold mb-4">Current Packages</h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 g-4 ">
          {services.map((service) => (
            <ServiceCart key={service._id} service={service}></ServiceCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
