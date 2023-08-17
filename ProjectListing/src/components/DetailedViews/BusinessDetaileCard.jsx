import React, { useState } from 'react';
import { API_LINK } from '../../../constants';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProjectCardData from '../cards/ProjectCardData';


export default function BusinessDetailCard({ companyData, handleProDetails }) {

    

    //Rate company
    const [rating, setRating] = useState(0);
    const [testimonial, setTestimonial] = useState("")

    const handleRatingChange = (event) => {
        const newRating = parseInt(event.target.value, 10);
        if (!isNaN(newRating) && newRating >= 1 && newRating <= 5) {
            setRating(newRating);
        }
    };

    const handleTestimonialChange = (event) => {
        setTestimonial(event.target.value);
    };

    const submitReview = () => {
        console.log("___rating___", rating)
        console.log("___testimonial___", testimonial)

        const token = localStorage.getItem("accessToken");

        if (token) {
            fetch(`${API_LINK}/u/api/rateorg/${companyData.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    rating: parseInt(rating),
                    testimonial: testimonial
                }),
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.message) {
                        toast(data.message)
                    }
                    if (data.error) {
                        console.log("___error___", data.error)
                    }
                    console.log("___Rating___", data.data)
                    toast("company rated")
                })
                .catch((err) => toast(err))
        }
        else {
            toast("Please login to Give review")
        }
    }

    function formatDate(inputDateString) {
        return new Date(inputDateString).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        });
      }

    return (
        <div className='w-full flex flex-col bg-white rounded-2xl'>
            <ToastContainer />
            <div className="relative w-auto rounded-lg shadow-lg">
                <div className="p-4">
                    <h2 className="text-5xl font-bold mb-4">{companyData.company_name}</h2>
                    <div className="flex justify-between items-center+">
                        <p className="text-2xl">Location: {companyData.location}</p>
                    </div>
                        <p className="text-2xl">Industry: {companyData.industry}</p>
                    <p className="text-lg mb-2">{companyData.description}</p>
                </div>
                <div className="text-sm px-4 py-2 flex justify-between">
                    <div>
                        <p className="text-lg">Created: {formatDate(companyData.createdAt)}</p>
                        <p className="text-lg">Updated: {formatDate(companyData.updatedAt)}</p>
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">Update</button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Delete</button>
                    </div>
                </div>
            </div>

            <div className='m-4'>
                <h1 className='text-lg'>Rate and provide a testimonial:</h1>
                <div className='flex'>
                    <h1 className='text-lg'>Rating:</h1>
                    <input
                        type="number"
                        value={rating}
                        min="1"
                        max="5"
                        className="w-10 mx-4 px-2 py-1 rounded border-2 border-gray-500 border-none outline-none"
                        onChange={handleRatingChange}
                    />
                </div>
                <div>
                    <h1 className='text-lg'>testimonial:</h1>
                    <textarea
                        placeholder="Enter your testimonial..."
                        value={testimonial}
                        onChange={handleTestimonialChange}
                        rows={5} // Limit to 5 lines
                        className="w-full px-2 py-1 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
                        style={{ width: '100%', resize: 'none' }}
                    />
                </div>
                <button
                    type="button"
                    onClick={() => submitReview()}
                    className="inline-flex justify-center ml-2 py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Submit
                </button>

            </div>

            <div className='flex-1 grid grid-cols-4 gap-4 justify-end bg-navbar'>
                {companyData.Projects.map((projectData, index) => (
                    <ProjectCardData key={index} projectData={projectData} handleProDetails={handleProDetails} />
                ))}

            </div>



        </div>
    );
}
