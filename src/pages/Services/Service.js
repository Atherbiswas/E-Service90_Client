import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Service = ({service}) => {
    const {_id, title, image, details, price, rating} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6">
          <figure><img src={image} className='w-3/4 max-h-44' alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{title}</h2>
              <p><span className='font-bold'>Service Details:</span> 
                
                {
                  details.length > 100 ? 
                  <>
                  {details.slice(0, 100) + '...'}<Link to={`/services/${_id}`}><span>Show details</span></Link>
                  </>
                  : details
                }
                 </p>
                <p><span className='font-bold'>Price: </span>{price}</p>
                <p><span className='font-bold'>Rating: </span>{rating}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                   <Link to={`/checkout/${_id}`}>Check Out</Link>
                <FaArrowRight className='mx-2'></FaArrowRight>
                </button>
              </div>
          </div>
        </div>
    );
};

export default Service;