import React from 'react';
import { GiSchoolBag } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <div className="container">
            <div className="bg-no-repeat bg-cover bg-[url('public/Image/SptHeroBg.jpg')]">
                <div className="bg-black bg-opacity-80">
                    <div className='md:p-32 p-2 py-20 flex flex-col gap-2'>
                        <h1 className='lg:text-5xl text-3xl text-white font-semibold'>2024 শিক্ষাবর্ষে তৃতীয় থেকে নবম শ্রেণীতে ভর্তি চলছে!</h1>
                        <p className='text-zinc-500 text-xl font-semibold mt-5'>2024 সাল জুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পূর্ণ সিলেবাসের 💯 তে 💯 প্রস্তুতি!</p>
                    </div>
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-8 gap-2 lg:p-32 md:p-28 p-2 '>
                        <div className='border hover:border-green-800 rounded-md hover:bg-red-800 hover:bg-opacity-30 group hover:scale-105 md:hover:scale-110 duration-300'>
                            <Link to='/class3to5'>
                                <div className='flex flex-col justify-center items-center gap-4 p-5 '>
                                    <GiSchoolBag className='text-red-400 md:h-14 md:w-14 h-10 w-10 group-hover:rotate-[720deg] duration-300 ' />
                                    <div className='flex justify-center items-center gap-1'>
                                        <p className='text-white text-[14px] md:text-base lg:text-xl font-bold'><Link to='/class3to5'>৩য় থেকে <br />৫ম শ্রেণি</Link></p>
                                        <IoIosArrowRoundForward size={30} className='text-white' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='border hover:border-green-800 rounded-md hover:bg-yellow-800 hover:bg-opacity-30 group hover:scale-105 md:hover:scale-110 duration-300'>
                            <Link to='class6'>
                                <div className='flex flex-col justify-center items-center gap-4 p-5 '>
                                    <GiSchoolBag className='text-yellow-400 md:h-14 md:w-14 h-10 w-10 group-hover:rotate-[720deg] duration-300 ' />
                                    <div className='flex justify-center items-center gap-1'>
                                        <p className='text-white text-[14px] md:text-base lg:text-xl font-bold'><Link to='class6'>৬ষ্ঠ শ্রেণি</Link></p>
                                        <IoIosArrowRoundForward size={30} className='text-white' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='border hover:border-green-800 rounded-md hover:bg-blue-800 hover:bg-opacity-30 group hover:scale-105 md:hover:scale-110  duration-300'>
                            <Link to='class7'>
                                <div className='flex flex-col justify-center items-center gap-4 p-5 '>
                                    <GiSchoolBag className='text-blue-400 md:h-14 md:w-14 h-10 w-10 group-hover:rotate-[720deg] duration-300 ' />
                                    <div className='flex justify-center items-center gap-1'>
                                        <p className='text-white text-[14px] md:text-base lg:text-xl font-bold'><Link to='class7'>৭ম শ্রেণি</Link></p>
                                        <IoIosArrowRoundForward size={30} className='text-white' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='border hover:border-green-800 rounded-md hover:bg-orange-800 hover:bg-opacity-30 group hover:scale-105 md:hover:scale-110  duration-300'>
                            <Link to='class8'>
                                <div className='flex flex-col justify-center items-center gap-4 p-5 '>
                                    <GiSchoolBag className='text-orange-400 md:h-14 md:w-14 h-10 w-10 group-hover:rotate-[720deg] duration-300' />
                                    <div className='flex justify-center items-center gap-1'>
                                        <p className='text-white text-[14px] md:text-base lg:text-xl font-bold'><Link to='class8'>৮ম শ্রেণি</Link></p>
                                        <IoIosArrowRoundForward size={30} className='text-white' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='border hover:border-green-800 rounded-md hover:bg-green-800 hover:bg-opacity-30 group hover:scale-105 md:hover:scale-110  duration-300'>
                            <Link to='class9'>
                                <div className='flex flex-col justify-center items-center gap-4 p-5 '>
                                    <GiSchoolBag className='text-green-400 md:h-14 md:w-14 h-10 w-10 group-hover:rotate-[720deg] duration-300 ' />
                                    <div className='flex justify-center items-center gap-1'>
                                        <p className='text-white text-[14px] md:text-base lg:text-xl font-bold'><Link to='class9'>৯ম শ্রেণী</Link></p>
                                        <IoIosArrowRoundForward size={30} className='text-white' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;