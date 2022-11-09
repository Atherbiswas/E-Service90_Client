import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])

    return (
        <div>
            <div>
                <h2 className='text-4xl text-center text-white'>My All Courses Here</h2>
            </div>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3'>
            {
                allServices.map(service => <ServiceCard
                key={service._id}
                service={service}
                
                ></ServiceCard>)
            }
            
        </div>
        </div>
    );
};

export default AllServices;