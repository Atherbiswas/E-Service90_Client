import React from 'react';

const ServiceCard = ({service}) => {
  const {title, image, } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6">
          <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
          </div>
        </div>
    );
};

export default ServiceCard;