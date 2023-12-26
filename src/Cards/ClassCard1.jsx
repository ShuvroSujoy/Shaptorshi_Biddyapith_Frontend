import React from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import { PiBookOpenTextLight } from "react-icons/pi";
import { PiNotebook } from "react-icons/pi";
import { SlQuestion } from "react-icons/sl";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";

const ClassCard1 = ({ image }) => {
    return (
        <div>
            <div className='border border-2 rounded-md hover:border-slate-400'>
                <div className='object-cover'>
                    <img className='p-4' src={image} alt="" />
                    <div className='flex justify-center'>
                        <button className='text-white text-xl font-SptFont text-center hover:text-2xl border rounded-xl bg-red-800 px-8 py-2 hover:bg-red-600'>
                            <h2 className=''>Read More</h2>
                        </button>
                    </div>
                </div>
                <div className='px-8 py-3 flex flex-col gap-y-5'>
                    <div className='flex gap-x-2 items-center'>
                        <IoCalendarOutline size={20} className='text-zinc-500' />
                        <p className='text-zinc-500'>ক্লাস শুরু 0১ জানুয়ারী থেকে</p>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <PiBookOpenTextLight size={20} className='text-zinc-500' />
                        <p className='text-zinc-500'>৬ টি বিষয়</p>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <PiNotebook size={20} className='text-zinc-500' />
                        <p className='text-zinc-500'>প্রতি ক্লাসে ডাউট সলভ</p>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <SlQuestion size={20} className='text-zinc-500' />
                        <p className='text-zinc-500'>ডেইলি ও উইকলি প্র্যাক্টিস</p>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <AiFillBook size={20} className='text-zinc-500' />
                        <p className='text-zinc-500'>প্রতি ক্লাসে লেকচার শিট</p>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <MdOutlineLibraryBooks size={20} className='text-zinc-500' />
                        <p className='text-zinc-500'>ডেমো অ্যাসাইনমেন্ট প্র্যাক্টিস</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard1;