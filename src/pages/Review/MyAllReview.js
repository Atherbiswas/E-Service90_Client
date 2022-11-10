import React from 'react';
import toast from 'react-hot-toast';

const MyAllReview = ({review}) => {
    const {_id, serviceName,email,rating,Creview} = review;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this review')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }

    }
    return (
        <tr>
            <th>
            <label>
                <button onClick={ () => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </label>
            </th>
            <td>
                <div className="font-bold">{serviceName}</div>
            </td>
            <td>
            {rating}
            </td>
            <td>{email}</td>
            <td>{Creview}</td>
      </tr>
    );
};

export default MyAllReview;