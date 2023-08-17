import React, { useState, useEffect } from 'react'
import { API_LINK } from '../../../constants';

import DevloperCardData from '../cards/DevloperCardData';

export default function DevloperViewCompany() {

  const [devsData, setDevsData] = useState([]);

  const skillsData = [
    ['javascript', 'JavaScript'],
    ['python', 'Python'],
    ['java', 'Java'],
    ['html', 'HTML'],
    ['css', 'CSS'],
    ['react', 'React.js'],
    ['node', 'Node.js'],
    ['docker', 'Docker'],
    ['mongodb', 'MongoDB'],
    ['uiux', 'UI/UX'],
  ];

  const [selectedSkill, setSelectedSkill] = useState('');
  const [showDevModal, setShowDevModal] = useState(false)
  const [developerData, setDeveloperData] = useState({});

  const openDevModal = async (devData) => {
    await setDeveloperData(devData.devData);
    console.log("___devData___", devData)
    setShowDevModal(true);
  };

  const closeDevModal = () => {
    setShowDevModal(false);
  };

  console.log("___filter___", selectedSkill)

  useEffect(() => {
    fetchDevsData();
  }, [selectedSkill]);

  const fetchDevsData = () => {
    fetch(`${API_LINK}/api/dev/${selectedSkill}`)
      .then((response) => response.json())
      .then((data) => {
        setDevsData(data.data);
        console.log(data.data);
      })
      .catch((error) => console.log(error));
  };
  const handleSkillChange = (event) => {
    setSelectedSkill(event.target.value);
  };

  //Rate devloper
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

  const submitReview = (developerData) => {
    console.log("___rating___", rating)
    console.log("___testimonial___", testimonial)

    const token = localStorage.getItem("accessToken");

    if (token) {
      fetch(`${API_LINK}/o/api/ratedev/${developerData.id}`, {
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
          toast("Devloper rated")
        })
        .catch((err) => toast(err))
    }
    else {
      toast("Please login to Give review")
    }
  }



  return (
    <div className="flex-1 flex">
      <div className="w-[350px] h-full hidden md:block rounded-tr-3xl bg-navtext text-white  p-8 flex flex-col overflow-y-scroll">
        <div>
          <div className='text-2xl mb-4 font-semibold'>Filters</div>
          {skillsData.map((skill) => (
            <div className='py-1' key={skill[0]}>
              <input
                type="radio"
                id={skill[0]}
                name="skill"
                value={`filter=${skill[0]}`} // Corrected the value here
                checked={selectedSkill === `filter=${skill[0]}`}
                onChange={handleSkillChange}
                className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
              />
              <label className='mx-3 text-lg' htmlFor={skill[0]}>{skill[1]}</label>
            </div>
          ))}

          <div className='text-2xl mt-5 mb-2 font-semibold'>Sort</div>
          <div className='text-xl mb-2 font-semibold'>By Date</div>
          <div className='py-1' key='sort=asc'>
            <input
              type="radio"
              id='sort=asc'
              name="skill"
              value="sort=asc"
              checked={selectedSkill === "sort=asc"}
              onChange={handleSkillChange}
              className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
            />
            <label className='mx-3 text-lg' htmlFor='sort=asc'>Oldest first</label>
          </div>
          <div className='py-1' key='sort=desc'>
            <input
              type="radio"
              id='sort=desc'
              name="skill"
              value="sort=desc"
              checked={selectedSkill === "sort=desc"}
              onChange={handleSkillChange}
              className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
            />
            <label className='mx-3 text-lg' htmlFor='sort=desc'>Newest first</label>
          </div>

          <div className='text-xl mt-3 mb-2 font-semibold'>By Price</div>
          <div className='py-1' key='price=asc'>
            <input
              type="radio"
              id='price=asc'
              name="skill"
              value="price=asc"
              checked={selectedSkill === "price=asc"}
              onChange={handleSkillChange}
              className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
            />
            <label className='mx-3 text-lg' htmlFor='price=asc'>Low to High</label>
          </div>
          <div className='py-1' key='price=desc'>
            <input
              type="radio"
              id='price=desc'
              name="skill"
              value="price=desc"
              checked={selectedSkill === "price=desc"}
              onChange={handleSkillChange}
              className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
            />
            <label className='mx-3 text-lg' htmlFor='price=desc'>High to Low</label>
          </div>
          <div className='mt-10' key='none'>
            <input
              type="radio"
              id='filternone'
              name="skill"
              value=""
              checked={selectedSkill === ""}
              onChange={handleSkillChange}
              className="form-radio h-4 w-4 rounded-sm text-blue-500 transition duration-150 ease-in-out"
            />
            <label className='mx-3 text-lg' htmlFor='filternone'>Clear</label>
          </div>
          {/* <p>Selected filter: {selectedSkill}</p> */}
        </div>
      </div>
      <div className="flex-1 flex flex-col m-4 pt-1">
        <div className="h-[800px] max-w-[1600px] flex flex-wrap flex-cols-4 justify-center gap-y-10 mx-8 pt-10 item-top overflow-y-scroll">
          {devsData.map((devData, index) => (
            <DevloperCardData key={index} devData={devData} handleDevDetails={openDevModal} />
          ))}
        </div>
      </div>

      {showDevModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203; hii</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-y-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex w-full items-center justify-between">
                  <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                    <div className='flex justify-between'>
                      <h3 className="text-2xl leading-6 font-medium text-gray-900 mb-4">Dev details</h3>
                      <button
                        type="button"
                        onClick={closeDevModal}
                        className="inline-flex justify-center ml-2 py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="w-full rounded-lg bg-white p-6 flex flex-col">
                      {Object.keys(developerData).length === 0 ? null : (
                        <>
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                              {developerData.imageUrl && (
                                <img src={developerData.imageUrl} alt="Developer" className="w-20 h-20 rounded-full mr-4" />
                              )}
                              <div>
                                <h2 className="text-3xl font-bold mb-2">
                                  {developerData.dev_first_name} {developerData.dev_last_name}
                                </h2>
                                {developerData.rating && developerData.rating.length > 0 && (
                                  <div className="flex items-center">
                                    <Star className="text-yellow-400 mr-1" />
                                    <span className="text-black-400">
                                      rating:-
                                      {developerData.rating.reduce((sum, rating) => sum + rating, 0) / developerData.rating.length}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={() => { }}>
                              Recruit
                            </button>
                          </div>

                          <div className="mb-4">
                            <h3 className="text-xl font-bold">Contact Information:</h3>
                            {developerData.address && <p className="text-sm">Address: {developerData.address}</p>}
                            {developerData.phone && <p className="text-sm">Phone: {developerData.phone}</p>}
                            {developerData.email && <p className="text-sm">Email: {developerData.email}</p>}
                          </div>

                          <div className="mb-4">
                            <h3 className="text-xl font-bold">Additional Details:</h3>
                            {developerData.background && <p className="text-sm">Background: {developerData.background}</p>}
                            {developerData.price && <p className="text-sm">Price: ${developerData.price}/hr</p>}
                            {developerData.portfolio_link && (
                              <p className="text-sm">
                                Portfolio Link: <a href={developerData.portfolio_link} className="text-blue-500">{developerData.portfolio_link}</a>
                              </p>
                            )}
                          </div>

                          <div className="mb-4">
                            <h3 className="text-xl font-bold">Skills:</h3>
                            <div className="flex flex-wrap">
                              {developerData.skills && developerData.skills.length > 0 && (
                                developerData.skills.map((skill, index) => (
                                  <button key={index} className="bg-gray-300 py-1 px-3 rounded-lg text-md mr-2 mb-2">
                                    {skill}
                                  </button>
                                ))
                              )}
                            </div>
                          </div>

                          <div className="mb-4">
                            <h3 className="text-xl font-bold">Testimonials:</h3>
                            {developerData.testimonial && developerData.testimonial.length > 0 && (
                              <ul className="list-disc pl-6">
                                {developerData.testimonial.map((testimonial, index) => (
                                  <li key={index} className="mb-2">
                                    {testimonial}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                    <div>
                        <h1  className="text-lg font-bold">Rate and provide a testimonial:</h1>
                      <div className='flex items-center'>
                        <h1>Rating:</h1>
                        <input
                          type="number"
                          value={rating}
                          min="1"
                          max="5"
                          className="w-12 mx-4 px-2 py-1 rounded border-2 border-gray-500 border-none outline-none"
                          onChange={handleRatingChange}
                        />
                      </div>
                      <div>
                        <h1 class>Testimonial:</h1>
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
                        onClick={() => submitReview(developerData)}
                        className="inline-flex justify-center ml-2 py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        Submit
                      </button>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
