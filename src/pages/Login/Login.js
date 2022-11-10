import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo1 from '../../assets/images/register.png';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/UseTitle';


const Login = () => {
    const {providerLogIn, loginUser} = useContext(AuthContext);
    useTitle('E-Service90/Login')

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success('Login successful');
            navigate(from , {replace: true})
            
        })
        .catch(error => console.error(error))
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('You have successfully login with google account');
        })
        .catch(error => console.error(error))
    }
    
    return (
        <div className="hero">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center  lg:text-left">
                <img src={logo1} className='w-4/5 rounded-md' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-inner text-white border rounded-md">
                <form onSubmit={handleLogIn} className="card-body">
                <h1 className="text-5xl font-bold text-center">Login!!</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered text-black" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered text-black" />
                    <label className="label">
                        <Link href="#" className="label-text-alt link link-hover"><span className='text-white'>Forgot password?</span></Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    <hr  className='mt-1'/>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">
                        <FcGoogle className='mx-2 text-2xl'></FcGoogle>
                        Login With Google</button>
                    <p className='text-center mt-1'>New to E-Service90? <Link className='text-info font-bold' to='/signup'>Sign In</Link> </p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;