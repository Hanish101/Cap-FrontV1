import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CompanyNavbar({ activePage, onPageChange }) {

    const navigate = useNavigate()

    const logoutFunction = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('accessTokenCreationDate')
        localStorage.removeItem('userID')
        navigate('/')

    }


    return (

        <nav className='w-full bg-navbar h-[80px]'>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 mx-16">
                            <span className="flex-1 text-center text-4xl font-semibold text-navtext hidden md:block">SkillHub</span>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex space-x-4 border-indigo-950">
                            <div className={`flex-auto py-1 px-4 text-navtext font-semibold text-lg border-b-2 hover:border-navtext ${activePage === 'company-home' ? 'text-navtext border-navtext': 'border-navbar'}`}
                            onClick={() => onPageChange('company-home')}>
                                Company homepage
                            </div>
                            <div className={`flex-auto py-1 px-4 text-navtext font-semibold text-lg border-b-2 hover:border-navtext ${activePage === 'developers' ? 'text-navtext border-navtext': 'border-navbar'}`}
                            onClick={() => onPageChange('developers')}>
                                Developers
                            </div>

                        </div>
                    </div>
                    <div className="hidden sm:flex items-center">
                        <button className='bg-primary text-white font-semibold px-2 py-1 rounded-lg mx-6' onClick={logoutFunction}>Log out</button>
                    </div>
                </div>
            </div>
        </nav>

    );

}
