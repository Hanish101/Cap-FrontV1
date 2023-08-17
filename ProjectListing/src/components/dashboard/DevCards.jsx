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
                console.log(data.data);
            })
            .catch((error) => console.log(error));
    };


    return (
        <>
            <div className="h-[800px] max-w-[1600px] flex flex-wrap flex-cols-4 justify-center gap-y-10 mx-8 pt-10 item-top overflow-y-scroll">
                {devsData.map((devData, index) => (
                    <DevloperCardData key={index} devData={devData} handleDevDetails={handleDevDetails}/>
                ))}
            </div>
        </>
    );
}
