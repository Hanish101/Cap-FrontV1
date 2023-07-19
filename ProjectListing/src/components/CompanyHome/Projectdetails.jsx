import React from 'react'
import { useEffect, useState } from 'react';
import { API_LINK } from '../../../constants';

import { CheckCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

import DevloperCardData from '../cards/DevloperCardData';

const projectData = {
  project_name: "Project ABC",
  counter: true,
  description: "A web application for managing tasks and deadlines",
  timeframe: "6 months",
  technology: ["React", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
  devlist: ["461d7768-b38f-4bdc-ab71-f5a21d41cb57", "0d5d51f9-e3ab-45f2-907a-9c7d9c81eb62"],
  team: ["8498e5be-9b46-4684-9f4e-048866d21f9c", "b7e114cd-37fb-45fe-b2bd-e3b80cece462"],
  createdAt: "2023-07-12T11:03:09.902Z",
  updatedAt: "2023-07-12T11:03:09.902Z",
};


export default function Projectdetails({projectData, projectView}) {

  const [developers, setDevelopers] = useState([]);
  const [teams, setTeams] = useState([]);

  console.log("___project data__", projectData)


  useEffect(() => {
    const fetchData = async () => {
      console.log("__project devs___",projectData.devlist)
          const developerPromises = projectData.devlist.map((devId) => {
            return fetch(`${API_LINK}/api/dev/${devId}`)
              .then(response => response.json())
              .then((data) => data.data)
              .catch(error => console.error(`Error fetching developer data: ${error}`));
          });
    
          const developerData = await Promise.all(developerPromises);
          setDevelopers(developerData);
          console.log("___Dev data__", developers)
        };
      fetchData()
  }, []);

  return (
    <div className='w-full flex flex-col'>
      <div className="w-full h-300 rounded-xl bg-blue-200">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{projectData.project_name}</h2>
          <div className='bg-blue-500 p-2 rounded-lg inline'>{projectView}</div>
          <p className="text-lg mb-4">{projectData.description}</p>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <CheckCircleOutline className="text-blue-500" />
              <span className="text-blue-500">{projectData.timeframe}</span>
            </div>
            <div className="flex items-center">
              <RemoveCircleOutline className="text-blue-500" />
              <span className="text-blue-500">{projectData.devlist.length} Developers</span>
            </div>
          </div>
          <div className="flex flex-wrap">
            {projectData.technology.map((tech, index) => (
              <div
                key={index}
                className="bg-blue-300 text-blue-800 py-1 px-3 rounded-full text-sm mr-2 mb-2"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-blue-500 rounded-b-xl">
          <div className="text-white font-semibold">${projectData.counter ? 'Active' : 'Inactive'}</div>
          <div className="text-white text-xs">{projectData.createdAt}</div>
        </div>
      </div>
      <div className='mx-6 text-lg font-semibold'>Devlopers</div>
      <div className='bg-blue-200 flex-1 grid grid-cols-2 gap-4 justify-end rounded-xl mx-4 py-2'>
        {developers.map((developer) => (
          <DevloperCardData key={developer.id} devData={developer} handleDevDetails={()=>{}}/>
        ))}
      </div>
      <div className='bg-blue-200 flex-1 grid grid-cols-4 gap-4 justify-end rounded-xl mx-4 mb-2 py-2'>
        Team
        {teams.map((team) => (
          <div key={team.id} className='w-[300px] h-[300px] bg-blue-300 rounded-xl px-4 pb-2'>
            <h2 className='text-xl font-bold mb-2'>Team {team.id}</h2>
            {/* Render additional team details */}
          </div>
        ))}
      </div>
    </div>
  )
}
