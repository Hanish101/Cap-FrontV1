import React, {useState} from 'react'

export default function DevloperCardData({ devData, handleDevDetails }) {

    const handleDetailClick = () => {
        handleDevDetails({ devData });
        console.log("clickes")
    }

    
    const getRandomColorIndex = () => {
        return Math.floor(Math.random() * Object.keys(colors).length);
    };

    // Custom colors from your Tailwind CSS configuration
    const colors = {
        cardorange: '#ffe1cc',
        cardpurple: '#e3dbfa',
        cardgreen: '#d4f6ed',
        cardblue: '#dff2ff',
        cardgrey: '#eceef5',
    };
    
    const randomColor = getRandomColorIndex();



    return (
        // <div className='w-[450px] h-[250px] p-8 bg-blue-300 mt-4 ml-4 rounded-2xl' onClick={()=>handleDetailClick()}>

        //     <div className="gap-8 sm:flex overflow-hidden">
        //         <div className="h-[250px] flex justify-center rounded-full">
        //             <img

        //                 src={devData.imageUrl}
        //                 className="w-[90px] h-[90px] mb-14 rounded-full object-cover object-center shadow-md"
        //                 alt=""
        //             />
        //         </div>
        //         <div className="mt-4 w-1/2">
        //             <h4 className="text-lg text-gray-700 font-semibold">{devData.dev_first_name} {devData.dev_last_name}</h4>
        //             {/* <p className="text-indigo-600">{devData.bio}</p> */}
        //             <p className="text-gray-600 mt-2">{devData.background}</p>
        //             <div className="mt-3 flex flex-wrap text-gray-400">
        //             {devData.skills.slice(0,3).map((skill, index) => (
        //                 <div key={index} className='m-1 px-4 py-2 bg-blue-500 text-white rounded-full'>{skill}</div>
        //                 ))
        //             }
        //             </div>
        //         </div>
        //     </div>
        //      {/* <div className='h-[270px] bg-blue-500 m-3 rounded-xl'>
        //          <div className='h-[70px] flex justify-between items-center'>
        //              <div className='border-2 border-solid m-3 py-2 px-4 rounded-xl'>{formattedDate}</div>
        //              <div className="h-10 w-10 rounded-full bg-gray-300 mx-3"></div>
        //          </div>
        //          <div className='h-[90px] flex justify-between items-center'>
        //              <div className="h-16 w-16 rounded-full bg-gray-300 mx-3"></div>
        //              <div className='text-3xl truncate line-clamp-2 mr-3 font-medium'>{devData.dev_first_name} {devData.dev_last_name}</div>
        //          </div>
        //          <div className='h-[90px] p-2 flex flex-wrap justify-start items-end'>
        //              {devData.skills.map((skill, index) => (
        //                  <div key={index} className='m-1 px-4 py-2 bg-blue-200 rounded-full'>{skill}</div>
        //                  ))
        //              }
        //          </div>

        //      </div>
        //      <div className='h-[40px] m-3 rounded-xl flex justify-between items-center px-2'>
        //          <div>Rating</div>
        //          <div  onClick={()=>handleDetailClick()} className='border-2 border-solid py-2 px-4 rounded-xl text-black bg-blue-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white'>Details</div>
        //      </div> */}
        //  </div>

        <div className="shadow-lg rounded-lg p-4 w-72 h-90 border-2 border-gray-200 m-2"
            onClick={() => handleDetailClick()}>
            <div className="flex justify-center items-center rounded-lg" style={{ backgroundColor: Object.values(colors)[randomColor] }}>
                <img
                    src={devData.imageUrl}
                    alt={`${devData.dev_first_name} ${devData.dev_last_name}`}
                    className="w-24 h-24 rounded-full mx-auto m-4"
                />
            </div>
            <div className="font-bold text-xl p-2 mb-2">{`${devData.dev_first_name} ${devData.dev_last_name}`}</div>
            <div className="text-sm text-gray-600 mb-4">{devData.bio}</div>
            <div className="flex flex-wrap gap-2">
                {devData.skills.slice(0, 4).map((skill, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 rounded-full text-sm text-gray-800"
                        style={{ backgroundColor: Object.values(colors)[randomColor] }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>


    );
}
