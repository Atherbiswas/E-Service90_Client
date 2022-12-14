import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://clinimedicare-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-10">
        <h2 className="text-4xl font-semibold text-white">My Services</h2>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-outline btn-secondary">
          <Link to="/allServices">More Services</Link>
          <FaArrowRight className="mx-2"></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Services;
