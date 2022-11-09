import React from 'react';
import { FaUserFriends, FaStar, FaStackExchange } from 'react-icons/fa';
import { BsClock } from "react-icons/bs";


const Features = () => {
    return (
        <div className="grid grid-cols-4 border border-indigo-400 gap-3 mt-8 p-5">
            <div className='text-white mx-auto'>
                <FaUserFriends className='text-7xl mx-3'></FaUserFriends>
                <div className='text-xl font-semibold text-center'>
                <h4 >1k+</h4>
                <h4>Customers</h4>
                </div>
            </div>
            <div className='text-white mx-auto'>
                <FaStackExchange className='text-7xl mx-3'></FaStackExchange>
                <div className='text-xl font-semibold text-center'>
                <h4 >10+</h4>
                <h4>Services</h4>
                </div>
            </div>
            <div className='text-white mx-auto'>
                <BsClock className='text-7xl mx-3'></BsClock>
                <div className='text-xl font-semibold text-center'>
                <h4 >5-10 min</h4>
                <h4>Completed</h4>
                </div>
            </div>
            <div className='text-white mx-auto'>
                <FaStar className='text-7xl mx-3'></FaStar>
                <div className='text-xl font-semibold text-center'>
                <h4 >1.5k+</h4>
                <h4>Review</h4>
                </div>
            </div>
        </div>
    );
};

export default Features;