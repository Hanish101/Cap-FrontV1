import React from "react";
import { Star } from "@mui/icons-material";
const devData = {

  dev_first_name: "Woke",
  dev_last_name: "Goated",
  skills: ["Java", "C", "JavaScript", "TypeScript"],
  bio: "I am an experienced developer with expertise in Java, C, JavaScript, and TypeScript.",
  background: "White",
  price: 5,
  rating: [4, 5, 3, 4, 5], // Rating values ranging from 1 to 5
  testimonial: [
    "Great work! Highly recommended.",
    "Excellent communication and coding skills.",
    "Delivered the project on time and met all requirements.",
  ], // Array of testimonials
  imageUrl: "https://unsplash.it/300/301",
  counter: true,
  portfolio_link: "https://projectlisting-98nl.onrender.com",
  address: "Downtown, Vancouver",
  phone: "344447744789",
  email: "abc7887@gmail.com",
  createdAt: "2023-07-14T19:13:55.871Z",
  updatedAt: "2023-07-14T19:13:55.871Z",
};

export default function DevloperDetailedCard({ devData }) {

  const handleRecruitClick = () => {

  };


  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full rounded-lg bg-white p-6 flex flex-col">
        <div className="flex w-full mb-4 ">
          <div className="flex items-center justify-between w-full">
            <div className="">
              <h2 className="text-5xl font-bold mb-2">
                {devData.dev_first_name} {devData.dev_last_name}
              </h2>
              <div className="flex text-xl items-center">
                <Star className="text-yellow-400 mr-1" />
                {devData.rating && devData.rating.length > 0 ? (
                  <span className="text-yellow-400">
                    {devData.rating.reduce((sum, rating) => sum + rating, 0) / devData.rating.length}
                  </span>
                ) : (
                  <span>No ratings</span>
                )}
              </div>
            </div>

            <img src={devData.imageUrl} alt="Developer" className="w-60 h-60 rounded-full mr-4" />

          </div>
          {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={handleRecruitClick}>
              Recruit
            </button> */}
        </div>

        <div className="mb-4">
          <h3 className="text-3xl font-bold">Contact Information:</h3>
          <p className="text-lg">Address: {devData.address}</p>
          <p className="text-lg">Phone: {devData.phone}</p>
          <p className="text-lg">Email: {devData.email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-3xl font-bold">Additional Details:</h3>
          <p className="text-lg">Background: {devData.background}</p>
          <p className="text-lg">Price: ${devData.price}/hr</p>
          <p className="text-lg">
            Portfolio Link: <a href={devData.portfolio_link} className="text-blue-500">{devData.portfolio_link}</a>
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-3xl font-bold">Skills:</h3>
          <div className="flex flex-wrap">
            {devData.skills && devData.skills.length > 0 ? (
              devData.skills.map((skill, index) => (
                <button key={index} className="bg-blue-300 text-blue-800 py-1 px-3 rounded-lg text-md mr-2 mb-2">
                  {skill}
                </button>
              ))
            ) : (
              <p>No skills available</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-3xl font-bold">Testimonials:</h3>
          {devData.testimonial && devData.testimonial.length > 0 ? (
            <ul className="list-disc text-lg pl-6">
              {devData.testimonial.map((testimonial, index) => (
                <li key={index} className="mb-2">
                  {testimonial}
                </li>
              ))}
            </ul>
          ) : (
            <p>No testimonials available</p>
          )}
        </div>
      </div>
    </div>
  );
};

