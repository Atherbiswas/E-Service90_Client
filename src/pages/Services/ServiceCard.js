import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({service}) => {
  const {title, image, details, 
    price} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6">
          <figure><img src={image} className='w-3/4 max-h-44' alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{title}</h2>
              <p><span className='font-semibold'>Service Details:</span> 
                
                {
                  details.length > 100 ? 
                  <>
                  {details.slice(0, 100) + '...'} <Link>Show details</Link>
                  </>
                  : details
                }
                 </p>
                <p><span className='font-bold'>Price: </span>{price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Check Out
                <FaArrowRight className='mx-2'></FaArrowRight>
                </button>
              </div>
          </div>
        </div>
    );
};

export default ServiceCard;