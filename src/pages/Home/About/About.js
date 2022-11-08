import React from 'react';
import authorImg from '../../../assets/images/Author pic.jpg'

const About = () => {
    return (
        <div className="hero mt-6 border-l-[8px] border-indigo-500">
            <div className="hero-content flex-col justify-around lg:flex-row">
                <div className='w-1/2'>
                <img src={authorImg} className="w-4/5 h-full rounded-lg shadow-2xl" alt=''/>
                </div>
                <div className='w-1/2 text-white'>
                <h1 className='font-semibold mb-7'>About Me:</h1>
                <h1 className="text-4xl font-bold">Jack Connor</h1>
                <p className="py-6">Online Specialist & Trainer</p>
                <button className="btn btn-outline btn-secondary">More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;