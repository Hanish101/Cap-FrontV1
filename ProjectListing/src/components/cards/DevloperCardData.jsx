import React, { useState } from 'react'

export default function DevloperCardData({ devData, handleDevDetails }) {

    const handleDetailClick = () => {
        handleDevDetails({ devData });
        console.log("clickes")
    }
    
    return (

        <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-700 dark:border-gray-700 md:max-w-sm rounded-xl"
            onClick={() => handleDetailClick()}>
            <div className="pb-6">
                <div className="flex justify-between">
                    <div className="flex justify-start mx-16 w-full">
                        <div className="relative">
                            <img src={devData.imageUrl} className="w-40 h-40 rounded-full border-white dark:border-gray-700 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]" />
                        </div>
                    </div>
                    <div className="m-6 whitespace-nowrap mb-1 text-2xl font-bold leading-normal text-white">{devData.dev_first_name} {devData.dev_last_name}</div>
                </div>
                <div className="mt-20 ">
                        <div className="flex flex-wrap justify-center gap-2">
                            {devData.skills.slice(0, 4).map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 rounded-full text-lg bg-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                    </div>

                </div>
                <div className='text-white text-center pt-6'>price ${devData.price}/hr</div>
                <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-6">
                            <p className="mb-4 font-light leading-relaxed text-white">
                                {devData.background}
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div class="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
                        <div class="absolute flex -space-x-12 rounded-b-2xl">
                            <div class="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10"></div>
                            <div class="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20"></div>
                            <div class="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30"></div>
                            <div class="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40"></div>
                            <div class="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50"></div>
                        </div>
                    </div> */}
            </div>
        </div>

        // </div>


    );
}
