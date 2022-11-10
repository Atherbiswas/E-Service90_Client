import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const {_id, title} = useLoaderData();
    const {user} = useContext(AuthContext);


    const handlePlaceReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const FirstName = `${form.FirstName.value}`;
        const rating = form.rating.value;
        const email = user?.email || 'unregistered';
        const Creview = form.review.value;
        const photoUrl = form.photo.value;

        const review = {
            service: _id,
            serviceName: title,
            Creview,
            email,
            customer: FirstName,
            image: photoUrl,
            rating: rating

        }

        fetch('http://localhost:5000/reviews' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast.success('Checkout and give Review successful')
                form.reset();
            }
        })
        .catch(error => console.error(error))

    }
    return (
        <div className='mt-12 h-max'>
            <div className='text-center text-white'>
                <h3 className='text-4xl mb-12'>CheckOut and Review</h3>
            </div>
            <form onSubmit={handlePlaceReview}>
                <div className='bg-white grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 rounded-lg'>
                <input name="id" type="text" placeholder="service id" className="input input-bordered w-full" defaultValue={_id} readOnly/>

                <input name="serviceName" type="text" placeholder="serviceName" className="input input-bordered w-full" defaultValue={title} readOnly/>

                <input name="FirstName" type="text" placeholder="First Name" className="input input-bordered w-full" required/>

                <input name="rating" type="text" placeholder="Rating" className="input input-bordered w-full" required/>

                <input name="email" type="text" placeholder="Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly/>
                <input name="photo" type="text" placeholder="photoUrl" className="input input-bordered w-full" required/>
                </div>
                <textarea name="review" className="textarea h-32 w-full textarea-primary mt-5" placeholder="Please review about this service" required></textarea>
                <input type="submit" className='btn btn-outline btn-secondary' value="Done" />
                <Link to="/allServices" className='btn btn-outline btn-secondary mx-2'>Back to services</Link>
            </form>
        </div>
    );
};

export default Review;