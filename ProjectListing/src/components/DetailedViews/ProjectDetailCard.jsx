import React, { useEffect, useState } from 'react';
import { CheckCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { API_LINK } from '../../../constants';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DevloperCardData from '../cards/DevloperCardData';


export default function ProjectDetailCard({ projectData }) {

  const [developers, setDevelopers] = useState([]);
  const [teams, setTeams] = useState([]);

  const [applied, setApplied] = useState(false);

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    if (projectData.devlist.includes(userID) || projectData.team.includes(userID)) {
      setApplied(true);
    }

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

  },[]);

  const applyProject = () => {
    if(!applied){
      fetch(`${API_LINK}/u/api/project/${projectData.id}`,{
        method: "PATCH",
        body: JSON.stringify({
          devlist: userID
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
      })
      .then((response)=> response.json())
      .then((data)=>{
        if(data.data){
          setApplied(true);
        }
      })
      .catch((error)=>toast(error))
    }

  }

  // useEffect(() => {
    //   const fetchData = async () => {
    //     const developerPromises = projectData.devlist.map((devId) => {
    //       return fetch(`${API_LINK}/api/dev/${devId}`)
    //         .then(response => response.json())
    //         .catch(error => console.error(`Error fetching developer data: ${error}`));
    //     });
  
    //     const developerData = await Promise.all(developerPromises);
    //     setDevelopers(developerData);
    //     console.log("___Dev data__", developers)
    //   };
    //   fetchData()
    // },[]);




  //   useEffect(() => {
  //     const fetchDevelopers = async () => {
  //       const developerPromises = projectData.devlist.map((devId) => {
  //         return fetch(`${API_LINK}/api/dev/${devId}`)
  //           .then(response => response.json())
  //           .catch(error => console.error(`Error fetching developer data: ${error}`));
  //       });

  //       const developerData = await Promise.all(developerPromises);
  //       setDevelopers(developerData);
  //       console.log("___Dev data__", developers)
  //     };

  //     const fetchTeams = async () => {
  //       const teamPromises = projectData.team.map((teamId) => {
  //         return fetch(`h${API_LINK}/api/dev/${teamId}`)
  //           .then(response => response.json())
  //           .catch(error => console.error(`Error fetching team data: ${error}`));
  //         });

  //         const teamData = await Promise.all(teamPromises);
  //         setTeams(teamData);
  //         console.log("___team data__",teams)
  //     };

  //     fetchDevelopers();
  //     fetchTeams();
  //   }, []);

  return (
    <div className='w-full flex flex-col'>
      <ToastContainer/>
      <div className="w-full h-300 rounded-xl bg-blue-200">
        <div className="p-4">
          <div className='flex justify-between'>
            <h2 className="text-xl font-bold mb-2">{projectData.project_name}</h2>
            {applied ? (
              <button className="text-md text-white mb-4 px-4 py-2 rounded-lg bg-blue-700" >Applied</button>
            ):(
              <button className="text-md text-white mb-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700" onClick={()=>applyProject()}>Apply</button>
            )
            }
          </div>
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
      <div className='bg-blue-200 flex-1 grid grid-cols-2 gap-4 rounded-xl mx-4 py-2'>
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
