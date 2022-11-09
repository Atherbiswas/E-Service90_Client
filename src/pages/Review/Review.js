import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const {title} = useLoaderData();
    return (
        <div>
            <form>
                <div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </form>
        </div>
    );
};

export default Review;