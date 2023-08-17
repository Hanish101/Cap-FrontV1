import React, { useState, useEffect} from "react";

export default function CompanyCardElement({ companyData, onClick}) {

  const [randomColor, setRandomColor] = useState("")

    const handleDetailClick = () => {
        handleBusDetails({ companyData });
        // console.log("Compdata",companyData)
    }

    const date = new Date(companyData.createdAt);
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const truncateString = (str) => {
        if (str.length <= 100) {
            return str;
        }
        return str.slice(0, 100) + '...';
    };

    const colors = {
        cardorange: '#FFD0B0',
        cardpurple: '#D5C4F7',
        cardgreen: '#A8E3D8',
        cardblue: '#B0E8FF',
        cardgrey: '#D0D3DB',
        cardyellow: '#FFDDA0',
        cardpink: '#FFB7E0',
        cardbrown: '#C3B29D',
        cardred: '#FFB7B7',
    };

    const getRandomColorIndex = () => {
        return Math.floor(Math.random() * Object.keys(colors).length);
    };

    useEffect(() => {
        setRandomColor(Object.values(colors)[getRandomColorIndex()]);
    }, []);


  return (
    <div className="w-96 h-72 border-4 border-lightgray bg-white rounded-lg shadow-md overflow-hidden" style={{ borderColor:randomColor }} onClick={onClick}>
      <div className=" border-lightgray px-4 py-2 text-sm font-bold" style={{ backgroundColor: randomColor}}>{formattedDate}</div>
      <div className="flex items-center px-4 py-2">
        <div className="w-20 h-20 mr-4 rounded-full overflow-hidden">
          <img src={companyData.logoUrl} alt="Company Logo" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-black">{companyData.company_name}</div>
          <div className="text-sm text-gray-600">
            <span className="font-bold">Location:</span> {companyData.location}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-bold">Industry:</span> {companyData.industry}
          </div>
        </div>
      </div>
      <div className="p-4 text-gray-700">{truncateString(companyData.description)}</div>
    </div>
  );
};