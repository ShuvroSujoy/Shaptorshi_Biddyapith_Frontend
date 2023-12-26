import React from 'react';

const StudentComment = ({ Comment, Image, Name, Address }) => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex flex-col gap-y-5 px-3 border rounded-xl p-3'>
                    <p className='text-base font-normal text-black text-width'>{Comment}</p>
                    <div>
                        <div className='flex items-start gap-x-3'>
                            <img className='h-20 w-24 rounded-[120px]' src={Image} alt="" />
                            <div className='flex flex-col'>
                                <h3 className='text-zinc-700 font-semibold text-xl'>{Name}</h3>
                                <p className='text-zinc-500 font-normal text-base text-width'>{Address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentComment;