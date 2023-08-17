import React, { useState, useEffect } from 'react'
import { API_LINK } from '../../../constants';

import CompanyCard from '../cards/CompanyCard';
import CompanyCardData from '../cards/CompanyCardData';

export default function CompCards({handleBusDetails, filter}) {

  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    fetchBusinessData();
  }, [filter]);

  

  const fetchBusinessData = () => {
    if(filter){
      fetch(`${API_LINK}/api/company/${filter}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(filter, data.data);
          setCompanyData(data.data);
        })
        .catch((error) => console.log(error));
    }
    else{
      fetch(`${API_LINK}/api/business`)
        .then((response) => response.json())
        .then((data) => {
          console.log(filter, data.data);
          setCompanyData(data.data);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className='h-[800px] max-w-[1600px] flex flex-wrap flex-cols-4 justify-between gap-y-10 mx-8 pt-10 item-top overflow-y-scroll'>
        {companyData.map((companyData, index) => (
          <CompanyCardData key={index} companyData={companyData} handleBusDetails={handleBusDetails}/>
        ))}
      </div>
    </>
  )
}
