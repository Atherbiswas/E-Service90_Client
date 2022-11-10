import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyAllReview from './MyAllReview';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect( () => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user?.email])
    return (
        <div>
            <h2 className='text-2xl text-center text-white'>You had given {reviews.length} reviews.</h2>

            <div className="overflow-x-auto w-full mt-5">
                <table className="table w-full">
                    <thead>
                    <tr><th></th>
                        <th>Service name</th>
                        <th>Rating</th>
                        <th>Email</th>
                        <th>Review</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                           reviews.map(review => <MyAllReview
                           key={review._id}
                           review={review}
                           
                           ></MyAllReview>) 
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default MyReview;