import React from 'react';

const ClassTeacher = ({Image,Name,Qualification}) => {
    return (
        <div>
            <div className='flex items-start gap-x-3'>
                <img className='h-20 w-20 rounded-2xl bg-pink-200' src={Image} alt="" />
                <div className='flex flex-col'>
                    <h3 className='text-zinc-700 font-semibold text-xl'>{Name}</h3>
                    <p className='text-zinc-500 font-normal text-base text-width'>{Qualification}</p>
                </div>
            </div>
        </div>
    );
};

export default ClassTeacher;