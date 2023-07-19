import React from 'react'

const devData = {
    "id": "02dd2014-faa4-48f4-aa24-80279970c87a",
    "dev_first_name": "hanish",
    "dev_last_name": "fgses",
    "skills": [
        "java",
        "c",
        "js",
        "ts"],
    "bio": "dggfv",
    "background": "vfz",
    "price": 5,
    "rating": [
        1,
        5,
        5,
        1
    ],
    "testimonial": [
        "dsuhf",
        "dsuerhf",
        "edaf",
        "efr"
    ],
    "imageUrl": "https://res.cloudinary.com/dk3nocfdb/image/upload/v1689490939/qqevotynwrpie52ihygt.svg",
    "counter": true,
    "portfolio_link": "erg",
    "address": "gergvesf",
    "phone": "grzfgcfr",
    "email": "hanishpatil4@gmail.com",
    "createdAt": "2023-07-16T07:02:20.623Z",
    "updatedAt": "2023-07-16T14:42:57.447Z",
    "userId": "cf536765-281c-4eb7-a8d9-6ae522459c0d"
}

export default function DevloperCardData({devData,  handleDevDetails }) {
 
    const handleDetailClick = () => {
        handleDevDetails({ devData });
        console.log("clickes")
    }

    // console.log(devData)


    return (
        <div className='w-[450px] h-[250px] bg-blue-300 mt-4 ml-4 rounded-2xl' onClick={()=>handleDetailClick()}>

            <div className="gap-8 sm:flex">
                <div className="h-[250px] ml-2 flex justify-center items-center rounded-full">
                    <img

                        src={devData.imageUrl}
                        className="w-[150px] h-[150px] rounded-full object-cover object-center shadow-md"
                        alt=""
                    />
                </div>
                <div className="mt-4 w-1/2">
                    <h4 className="text-lg text-gray-700 font-semibold">{devData.dev_first_name} {devData.dev_last_name}</h4>
                    {/* <p className="text-indigo-600">{devData.bio}</p> */}
                    <p className="text-gray-600 mt-2">{devData.background}</p>
                    <div className="mt-3 flex flex-wrap text-gray-400">
                    {devData.skills.slice(0,3).map((skill, index) => (
                        <div key={index} className='m-1 px-4 py-2 bg-blue-500 text-white rounded-full'>{skill}</div>
                        ))
                    }
                    </div>
                </div>
            </div>
            {/* <div className='h-[270px] bg-blue-500 m-3 rounded-xl'>
                <div className='h-[70px] flex justify-between items-center'>
                    <div className='border-2 border-solid m-3 py-2 px-4 rounded-xl'>{formattedDate}</div>
                    <div className="h-10 w-10 rounded-full bg-gray-300 mx-3"></div>
                </div>
                <div className='h-[90px] flex justify-between items-center'>
                    <div className="h-16 w-16 rounded-full bg-gray-300 mx-3"></div>
                    <div className='text-3xl truncate line-clamp-2 mr-3 font-medium'>{devData.dev_first_name} {devData.dev_last_name}</div>
                </div>
                <div className='h-[90px] p-2 flex flex-wrap justify-start items-end'>
                    {devData.skills.map((skill, index) => (
                        <div key={index} className='m-1 px-4 py-2 bg-blue-200 rounded-full'>{skill}</div>
                        ))
                    }
                </div>

            </div>
            <div className='h-[40px] m-3 rounded-xl flex justify-between items-center px-2'>
                <div>Rating</div>
                <div  onClick={()=>handleDetailClick()} className='border-2 border-solid py-2 px-4 rounded-xl text-black bg-blue-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white'>Details</div>
            </div> */}
        </div>
    )
}
