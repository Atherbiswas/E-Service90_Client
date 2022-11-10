import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import logo2 from '../../assets/images/register.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/UseTitle';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    useTitle('E-Service90/SignUp')
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success('Registration successful');
            navigate('/');
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="hero">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center  lg:text-left">
                <img src={logo2} className='w-4/5 rounded-md' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-inner text-white border rounded-md">
                <form onSubmit={handleRegister} className="card-body">
                <h1 className="text-5xl font-bold text-center">Sign Up!!</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered text-black" />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <p className='text-center mb-1'>Already Have an Account? <Link className='text-info font-bold' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;