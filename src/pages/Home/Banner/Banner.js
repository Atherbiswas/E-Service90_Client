import React from 'react';
import logo from '../../../assets/images/banner-img.png'
import './Banner.css'

const Banner = () => {
    return (
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={logo} className="w-full" alt=''/>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-24  top-1/3">
            <h1 className='text-white text-6xl font-bold'>We Provide <br /> Better  Online Service.</h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-24  top-1/2">
          <button className="btn btn-outline btn-secondary">Get Started</button>
          </div>
    </div>
    );
};

export default Banner;