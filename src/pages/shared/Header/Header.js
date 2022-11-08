import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../site-logo.png'

const Header = () => {

    const navbarItems = <>
    <li>
        <Link to='/'>Home</Link>
    </li>
    {/* {
        user?.email? <>
        <li><Link to="/myReviews">My reviews</Link></li>
        <li><Link to="/addService">Add service</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        </>
        :
        <li><Link to="/logout">Logout</Link></li>
    } */}
    <li>
        <Link to="/blog">Blog</Link>
    </li>
    <li>
        <Link to="/about">About</Link>
    </li>

    </>

    return (
        <div className="navbar bg-indigo-600 font-semibold sticky top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navbarItems}

                    </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl text-white">
                    <img src={logo} className="w-14 rounded-full" alt="" />
                        <span className='mx-2 text-3xl'>E-Service90</span>
                    
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex h-16 text-white">
                    <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                    </ul>
                </div>
        </div>
    );
};

export default Header;