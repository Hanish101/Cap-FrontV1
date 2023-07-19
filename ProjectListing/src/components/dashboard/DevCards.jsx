import React, { useState, useEffect } from 'react';
import { API_LINK } from '../../../constants';

import DevloperCardData from '../cards/DevloperCardData';

export default function DevCards({handleDevDetails, filter}) {
    const [devsData, setDevsData] = useState([]);

    console.log("___filter___",filter)

    useEffect(() => {
        fetchDevsData();
    }, [filter]);

    const fetchDevsData = () => {
        fetch(`${API_LINK}/api/dev/${filter}`)
            .then((response) => response.json())
            .then((data) => {
                setDevsData(data.data);
            })
            .catch((error) => console.log(error));
    };


    return (
        <>
            <h1 className="text-3xl pb-4 mx-3">Developers {filter}</h1>
            {/* <button onClick={()=>handleDevDetails({})}>Click</button> */}
            <div className="h-[800px] flex flex-wrap justify-center p-4 pb-8 item-top overflow-y-scroll">
                {devsData.map((devData, index) => (
                    <DevloperCardData key={index} devData={devData} handleDevDetails={handleDevDetails}/>
                ))}
            </div>
        </>
    );
}
