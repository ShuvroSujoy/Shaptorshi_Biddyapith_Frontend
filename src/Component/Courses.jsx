import React from 'react';
import { RxDoubleArrowRight } from "react-icons/rx";
import SptCourses2 from './SptCourses2';

const Courses = () => {
    return (
        <div className='container'>
            <div className='flex flex-col items-center gap-10 mt-10'>
                <h1 className='md:text-4xl text-xl text-red-600 text-center font-bold'>আমাদের শিক্ষাদান পদ্ধতি</h1>
                <div className='flex items-center'>
                    <div className='h-[3px] w-16 bg-red-800'></div>
                    <div className='h-[5px] w-16 bg-red-800'></div>
                    <div className='h-[3px] w-16 bg-red-800'></div>
                </div>
            </div>
            <div className='bg-slate-100 flex flex-col gap-5 mt-10 md:p-5 p-2 border border-2 hover:border-red-600 rounded-md'>
                <div className='flex gap-1 items-center group'>
                    <RxDoubleArrowRight size={25} className='text-red-800 group-hover:text-red-600 font-bold' />
                    <h2 className='text-red-800 group-hover:text-red-600 md:text-2xl text-base font-SptFont md:font-semibold'>মূল বইয়ের প্রতিটি অধ্যায়ের শিখন ফল শিক্ষার্থীকে বাস্তব অভিজ্ঞতার মধ্যদিয়ে শেখানো হয়।</h2>
                </div>
                <div className='flex gap-1 items-center group'>
                    <RxDoubleArrowRight size={25} className='text-red-800 group-hover:text-red-600 font-bold' />
                    <h2 className='text-red-800 group-hover:text-red-600 md:text-2xl text-base font-SptFont md:font-semibold'>শিখন ফল কতটুকু অর্জন করেছে তা যাচাই করার জন্য অধ্যায়ভিত্তিক Presentations গ্রহণ করা হয়।</h2>
                </div>
                <div className='flex gap-1 items-center group'>
                    <RxDoubleArrowRight size={25} className='text-red-800 group-hover:text-red-600 font-bold' />
                    <h2 className='text-red-800 group-hover:text-red-600 md:text-2xl text-base font-SptFont md:font-semibold'>ইংরেজি ভাষায় দক্ষতার সাথে কথা বলা বা শেখানোর জন্য English Debate/Speaking English বাধ্যতামূলক করা হয়েছে।</h2>
                </div>
                <div className='flex gap-1 items-center group'>
                    <RxDoubleArrowRight size={25} className='text-red-800 group-hover:text-red-600 font-bold' />
                    <h2 className='text-red-800 group-hover:text-red-600 md:text-2xl text-base font-SptFont md:font-semibold'>বাংলা ভাষায় দক্ষতার জন্য পাঠ সংশ্লিষ্ট বিষয় থেকে আবৃত্তি ও সাহিত্য চর্চার মাধ্যমে শিক্ষার্থীদের দক্ষ শিক্ষকের দ্বারা নিয়মিত অনুশীলন করা হয়।</h2>
                </div>
                <div className='flex gap-1 items-center group'>
                    <RxDoubleArrowRight size={25} className='text-red-800 group-hover:text-red-600 font-bold' />
                    <h2 className='text-red-800 group-hover:text-red-600 md:text-2xl text-base font-SptFont md:font-semibold'>গণিত, বিজ্ঞান ও ডিজিটাল প্রযুক্তি বিষয়গুলোর জন্য পরিপূর্ণ শিখন ফল অর্জনে দক্ষ ও পারদর্শী শিক্ষকবৃন্দের দ্বারা বাস্তব অভিজ্ঞতা ও ব্যবহারিক কাজের মাধ্যমে শিক্ষার্থীদের শিখন কার্যক্রম সম্পন্ন করা হয়।</h2>
                </div>
            </div>
            <SptCourses2 />
        </div>
    );
};

export default Courses;