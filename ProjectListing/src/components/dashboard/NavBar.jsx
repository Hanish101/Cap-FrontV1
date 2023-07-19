import React, { useEffect, useState } from 'react'
import { API_LINK } from '../../../constants';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NavBar({ activePage, onPageChange }) {

    const [userData, setUserData] = useState('')

    useEffect(() => {
        const userID = localStorage.getItem('userID')
        fetch(`${API_LINK}/api/dev/${userID}`)
            .then((response) => response.json())
            .then((data) => setUserData(data.data))
            .catch((error) => toast(error))
    })

    return (

        <nav className='w-full bg-black h-[80px]'>
            <ToastContainer />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-white font-semibold text-3xl">Logo</span>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex space-x-4 border-black">
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-white ${activePage === 'projects' ? 'text-white border-white' : 'border-black'}`}
                                onClick={() => onPageChange('projects')}>
                                Project
                            </div>
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-white ${activePage === 'companies' ? 'text-white border-white' : 'border-black'}`}
                                onClick={() => onPageChange('companies')}>
                                Company
                            </div>
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-white ${activePage === 'developers' ? 'text-white border-white' : 'border-black'}`}
                                onClick={() => onPageChange('developers')}>
                                Developers
                            </div>

                        </div>
                    </div>
                    <div className="hidden sm:flex items-center">
                        {userData === '' ? (
                            <div className="flex items-center justify-center rounded-full bg-white h-8 w-8"></div>
                        ) : (
                            <>
                                <div className="flex items-center justify-center rounded-full bg-white h-8 w-8">
                                    <span className="text-gray-800">{userData.dev_first_name[0].toUpperCase()}</span>
                                </div>
                                <span className="text-white ml-2">{userData.dev_first_name} {userData.dev_last_name}</span>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </nav>

    );

}
