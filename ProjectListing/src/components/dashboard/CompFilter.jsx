import React, { useState } from 'react';

export default function DevFilter({ handleFilterSelect }) {

    const [selectedSkill, setSelectedSkill] = useState('');

    const handleSkillChange = (event) => {
        setSelectedSkill(event.target.value);
        handleFilterSelect(event.target.value);
    };

    return (
        <div>
            <div className='text-3xl'>Sort</div>
            <div className='text-xl'>by date</div>
            <div className='text-xl mt-2' key='sort=asc'>
                <input
                    type="radio"
                    id='sort=asc'
                    name="skill"
                    value="sort=asc"
                    checked={selectedSkill === "sort=asc"}
                    onChange={handleSkillChange}
                    className='mr-4'
                />
                <label htmlFor='sort=asc'>Low to High</label>
            </div>
            <div className='text-xl mt-2' key='sort=desc'>
                <input
                    type="radio"
                    id='sort=desc'
                    name="skill"
                    value="sort=desc"
                    checked={selectedSkill === "sort=desc"}
                    onChange={handleSkillChange}
                    className='mr-4'
                />
                <label htmlFor='sort=desc'>High to Low</label>
            </div>
            <div className='text-xl mt-2' key='none'>
                <input
                    type="radio"
                    id='filternone'
                    name="skill"
                    value=""
                    checked={selectedSkill === ""}
                    onChange={handleSkillChange}
                    className='mr-4'
                />
                <label htmlFor='filternone'>Clear</label>
            </div>
            {/* <p>Selected Skill: {selectedSkill}</p> */}
        </div>
    );
}
