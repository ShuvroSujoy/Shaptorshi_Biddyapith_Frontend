import React from 'react';
import { IoIosCheckmark } from "react-icons/io";
import ClassCard1 from '../Cards/ClassCard1';
import ClassTeacher from '../Cards/ClassTeacher';
import { FiPhoneCall } from "react-icons/fi"
import StudentsCommentS from '../Component/StudentsCommentS';
const Class8 = () => {
    const phoneNumber = '01628-190818';
    return (
        <div className='container'>
            <div className='flex md:flex-row flex-col-reverse gap-5 mt-10 mb-10 '>
                {/* Main Part */}
                <div className='flex flex-col gap-y-5'>
                    <h1 className='md:text-4xl text-2xl text-black font-bold'>২০২৪ শিক্ষাবর্ষের ৮ম শ্রেণীতে ভর্তি চলছে</h1>
                    <p className='text-base text-gray-500 header-text-width'>বাংলাদেশের যেকোনো প্রান্তের ৮ম শ্রেণির শিক্ষার্থীদের পড়লেখায় সাহায্য করতে, নতুন জাতীয় শিক্ষাক্রম অনুযায়ী পড়াশোনার সবকিছু নিয়ে সাজানো হয়েছে ৮ম শ্রেণি - ব্যাচ ২০২৪।</p>
                    <div className='space-y-5'>
                        <h2 className='text-zinc-950 text-2xl font-semibold'>ফুল সিলেবাস প্রোগ্রামে যা যা থাকছে</h2>
                        <div className='border border-2 rounded-md p-3 flex flex-col gap-y-3'>
                            {/* Box */}
                            <div className='md:grid md:grid-cols-2 grid grid-cols-1 gap-x-5 gap-y-3'>
                                <div className='flex items-start gap-x-3'>
                                    <IoIosCheckmark size={40} className='text-red-800' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-black font-semibold text-xl'>সপ্তষীতেই সেরা শিক্ষক</h3>
                                        <p className='text-black font-normal text-base text-width'>- বাংলাদেশের যেকোনো জায়গা থেকে দেশসেরা শিক্ষকদের কাছে অনলাইনে সর্বোচ্চ মানের পড়ালেখার সুযোগ</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-x-3'>
                                    <IoIosCheckmark size={40} className='text-red-800' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-black font-semibold text-xl'>ডেমো অ্যাসাইনমেন্ট ক্লাস</h3>
                                        <p className='text-black font-normal text-base text-width'>- চ্যাপ্টারভিত্তিক থাকবে সেই চ্যাপ্টারের ডেমো অ্যাসাইনমেন্ট ক্লাস</p>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className='md:grid md:grid-cols-2 grid grid-cols-1 gap-x-5 gap-y-2'>
                                <div className='flex items-start gap-x-3'>
                                    <IoIosCheckmark size={40} className='text-red-800' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-black font-semibold text-xl'>ডেমো অ্যাসাইনমেন্ট প্র্যাকটিস</h3>
                                        <p className='text-black font-normal text-base text-width'>- একক এবং দলীয় অ্যাসাইনমেন্টর আদলে ডেমো প্র্যাকটিস দেওয়া হবে</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-x-3'>
                                    <IoIosCheckmark size={40} className='text-red-800' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-black font-semibold text-xl'>টপিক ভিত্তিক ক্লাস</h3>
                                        <p className='text-black font-normal text-base text-width'>- ৮ম শ্রেণির টপিক ভিক্তিক ক্লাসের মাধ্যমে জ্ঞান, অনুধাবন ও প্রয়োগমূলক শিক্ষা অর্জন হবে</p>
                                    </div>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className='md:grid md:grid-cols-2 grid grid-cols-1 gap-x-5 gap-y-2'>
                                <div className='flex items-start gap-x-3'>
                                    <IoIosCheckmark size={40} className='text-red-800' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-black font-semibold text-xl'>ডাউট সল্ভ</h3>
                                        <p className='text-black font-normal text-base text-width'>-ক্লাসের টপিক নিয়ে যেকোনো জিজ্ঞাসা থাকলে তা সমাধানের জন্য ক্লাস শেষের ৩০ মিনিট পর্যন্ত দ্বিতীয় শিক্ষক থাকবেন</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-x-3'>
                                    <IoIosCheckmark size={40} className='text-red-800' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-black font-semibold text-xl'>ডেইলি ও উইকলি প্র্যাকটিস</h3>
                                        <p className='text-black font-normal text-base text-width'>- ৮ম শ্রেণির পাঠ্যক্রমের বেসিক প্রিপারেশন যাচাই করার জন্য প্র্যাকটিস করতে পারবে</p>
                                    </div>
                                </div>
                            </div>
                            {/* 4rth */}
                            <div className='md:grid md:grid-cols-2 grid grid-cols-1 gap-x-5 gap-y-2'>
                                <div className='flex items-start gap-x-3'>
                                    <IoIosCheckmark size={40} className='text-red-800' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-black font-semibold text-xl'>একাধিক শিক্ষক পড়াবেন</h3>
                                        <p className='text-black font-normal text-base text-width'>- প্রতি ক্লাসে একাধিক শিক্ষক পড়াবেন; একজন ক্লাস নিবেন, অন্যরা সমস্যার সমাধান দিবেন</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-x-3'>
                                    <IoIosCheckmark size={40} className='text-red-800' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-black font-semibold text-xl'>টপিক রিভিশন</h3>
                                        <p className='text-black font-normal text-base text-width'>- প্রতিটি অধ্যায়ের সাথেই থাকবে লেকচার শিট</p>
                                    </div>
                                </div>
                            </div>
                            {/* 5th */}
                            <div className='md:grid md:grid-cols-2 grid grid-cols-1 gap-x-5 gap-y-2'>
                                <div className='flex items-start gap-x-3'>
                                    <IoIosCheckmark size={40} className='text-red-800' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-black font-semibold text-xl'>বছরজুড়ে স্কিল ডেভেলপমেন্ট</h3>
                                        <p className='text-black font-normal text-base text-width'>-৮মশ্রেণির পড়াশোনার পাশাপাশি স্কিল সেশনসহ গণিত, বিজ্ঞান ও ইংরেজি অলিম্পিয়াড, সাংস্কৃতিক, ইনডোর গেম বিভিন্ন প্রতিযোগীতা আয়োজন করা হবে</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-x-3'>
                                    <IoIosCheckmark size={40} className='text-red-800' />
                                    <div className='flex flex-col'>
                                        <h3 className='text-black font-semibold text-xl'>প্রোগ্রেস কার্ড</h3>
                                        <p className='text-black font-normal text-base text-width'>-৮ম শ্রেণির শিক্ষার্থীদের জন্য থাকবে প্রোগ্রেস কার্ড</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* TeachersDetails */}
                    <div className='space-y-5'>
                        <h2 className='text-zinc-950 text-2xl font-semibold'>ক্লাস নেবেন যারা</h2>
                        <div className='border border-2 flex flex-col gap-y-3 rounded-md md:p-5 p-2'>
                            <div className='md:grid md:grid-cols-2 grid grid-cols-1 gap-x-5 gap-y-2'>
                                <ClassTeacher
                                    Image="public/Image/mehediSir.png"
                                    Name="Shikder Mehedi Hasan"
                                    Qualification="BA & MA in English,Rajshahi University."
                                />
                                <ClassTeacher
                                    Image="public/Image/BadhsaSir.png"
                                    Name="Md.Badsha Khan"
                                    Qualification="MA in Mathematics, Jhangirnagor Unuvercity,Dhaka."
                                />
                            </div>
                            <div className='md:grid md:grid-cols-2 grid grid-cols-1 gap-x-5 gap-y-2'>
                                <ClassTeacher
                                    Image="public/Image/litonSir.png"
                                    Name="Litan Malakor"
                                    Qualification="Ma In Bangla,Khulna University."
                                />
                                <ClassTeacher
                                    Image="public/Image/moshiurSir.png"
                                    Name="Moshiur Rahman"
                                    Qualification="Honours In Social Science,BL College Khulna,."
                                />
                            </div>
                            <div className='md:grid md:grid-cols-2 grid grid-cols-1 gap-x-5 gap-y-2'>
                            <ClassTeacher
                                    Image="public/Image/Sujoy.png"
                                    Name="Shuvro Sujoy"
                                    Qualification="BSc in Computer Enginieer,Imperial College Of Engineering,Khulna."
                                />
                                <ClassTeacher
                                    Image="public/Image/Aerfan.png"
                                    Name="Aerfan Ahmmed"
                                    Qualification="BSc in Computer Enginieer,Brac University,Dhaka."
                                />
                            </div>
                        </div>
                    </div>
                    {/* Course Summery */}
                    <div className='space-y-5'>
                        <h2 className='text-zinc-950 text-2xl font-semibold'>প্রোগ্রাম সম্পর্কে বিস্তারিত</h2>
                        <div className='border border-2 rounded-md p-5 space-y-5'>
                            <details className='border-b-2 pb-3'>
                                <summary className='text-zinc-600 text-[18px] font-semibold'>কেনো সপ্তর্ষী?</summary>
                                <div className='px-5 py-3 mt-2  '>
                                    <ul className='list-disc text-base text-gray-500 header-text-width space-y-3'>
                                        <li>৮ম শ্রেণির নতুন কারিকুলাম অনুযায়ী একাডেমিক লাইফে সঠিক পড়াশুনার রুটিন থাকবে</li>
                                        <li>৮মশ্রেণির বইয়ের শিখনফলগুলো বাস্তব জীবনে প্রয়োগ করতে পারবে</li>
                                        <li>টপিকের বেসিক প্রিপারেশন যাচাই করার জন্য ডেইলি প্র্যাকটিস করতে পারবে</li>
                                        <li>৮ম ডেমো অ্যাসাইনমেন্ট (একক ও দলীয়) প্র্যাকটিস করতে পারবে</li>
                                        <li>৮ম শ্রেণির সিলেবাস ভিত্তিক যেকোনো ডাউট সল্ভ করতে পারবে</li>
                                        <li>ঘরে বসেই দেশসেরা শিক্ষকের সাথে লেখাপড়া করতে পারবে</li>
                                    </ul>
                                </div>
                            </details>
                            <details className=''>
                                <summary className='text-zinc-600 text-[18px] font-semibold'>৮ম শ্রেণির শিখন বিষয়</summary>
                                <div className='px-5 py-3 mt-2'>
                                    <ul className='list-disc text-base text-gray-500 header-text-width space-y-3'>
                                        <li>৬ টি বিষয় (গণিত, বিজ্ঞান, বাংলা, ইংরেজি, ডিজিটাল প্রযুক্তি, ইতিহাস ও সামাজিক বিজ্ঞান)</li>
                                        <li>নতুন কারিকুলাম অনুযায়ী ৭ম শ্রেণির ডেমো অ্যাসাইনমেন্ট প্র্যাক্টিস</li>
                                        <li>ডাউট সলভ</li>
                                        <li>ডেইলি প্র্যাক্টিস</li>
                                        <li>উইকলি প্র্যাক্টিস</li>
                                        <li>অধ্যায় ভিত্তিক লেকচার শিট</li>
                                    </ul>
                                </div>
                            </details>
                        </div>
                    </div>
                    {/* Students Comments Carousel */}
                    <div>
                        <StudentsCommentS />
                    </div>
                    {/* Some Qustuions */}
                    <div className='space-y-5'>
                        <h2 className='text-zinc-950 text-2xl font-semibold'>সচরাচর জিজ্ঞাসা</h2>
                        <div className='border border-2 rounded-md p-5 space-y-5'>
                            <details className='border-b-2 pb-3'>
                                <summary className='text-zinc-600 text-[18px] font-semibold'>কাদের জন্য?</summary>
                                <div className='px-5 py-3 mt-2  '>
                                    <ul className='list-disc text-base text-gray-500 header-text-width space-y-3'>
                                        <li>২০২৪ ৮ম শ্রেণির শিক্ষার্থীদের জন্য</li>
                                    </ul>
                                </div>
                            </details>
                            <details className='border-b-2 pb-3'>
                                <summary className='text-zinc-600 text-[18px] font-semibold'>এখানে কি ইংরেজি ভার্সনের শিক্ষার্থীদের পড়ার সুযোগ আছে?</summary>
                                <div className='px-5 py-3 mt-2'>
                                    <ul className='list-disc text-base text-gray-500 header-text-width space-y-3'>
                                        <li>না, আমাদের ক্লাস গুলো বাংলা ভার্শনের শিক্ষার্থীদের জন্য সাজানো হয়েছে</li>
                                    </ul>
                                </div>
                            </details>
                            <details className='border-b-2 pb-3'>
                                <summary className='text-zinc-600 text-[18px] font-semibold'>ক্লাস শুরু কবে থেকে?</summary>
                                <div className='px-5 py-3 mt-2'>
                                    <ul className='list-disc text-base text-gray-500 header-text-width space-y-3'>
                                        <li>0১ ই জানুয়ারী থেকে ক্লাস শুরু হবে</li>
                                    </ul>
                                </div>
                            </details>
                            <details className='border-b-2 pb-3'>
                                <summary className='text-zinc-600 text-[18px] font-semibold'>ক্লাস কোথায় নেওয়া হবে?</summary>
                                <div className='px-5 py-3 mt-2'>
                                    <ul className='list-disc text-base text-gray-500 header-text-width space-y-3'>
                                        <li>সপ্তর্ষী বিদ্যাপীঠের নিজস্ব ভবনে</li>
                                    </ul>
                                </div>
                            </details>
                            <details className='border-b-2 pb-3'>
                                <summary className='text-zinc-600 text-[18px] font-semibold '>ক্লাসের সময়?</summary>
                                <div className='px-5 py-3 mt-2'>
                                    <ul className='list-disc text-base text-gray-500 header-text-width space-y-3'>
                                        <li>For Morning Shift 08:00am-11:00am</li>
                                        <li>For Day Shift 03:00pm-06:00pm</li>
                                    </ul>
                                </div>
                            </details>
                            <details className=''>
                                <summary className='text-zinc-600 text-[18px] font-semibold'>কোনো লেকচার শীট কি দেওয়া হবে?</summary>
                                <div className='px-5 py-3 mt-2'>
                                    <ul className='list-disc text-base text-gray-500 header-text-width space-y-3'>
                                        <li>হ্যাঁ, অধ্যায় ভিক্তিক লেকচার শিট দেওয়া হবে</li>
                                    </ul>
                                </div>
                            </details>
                        </div>
                    </div>
                    {/* Contact Option */}
                    <div className='space-y-8'>
                        <h2 className='text-zinc-950 text-2xl font-semibold'>আরও কোন জিজ্ঞাসা আছে?</h2>
                        <div className='flex items-center justify-center'>
                            <a href={`tel:${phoneNumber}`} className='flex items-center gap-x-2 bg-red-800 hover:bg-red-600 hover:text-xl text-base text-white font-bold px-14 py-3 border rounded-xl'>
                                <FiPhoneCall />
                                <h2>{phoneNumber}</h2>
                            </a>
                        </div>
                    </div>
                </div>
                {/*Right Side Student Card */}
                <div className='lg:w-1/3'>
                    <div className='sticky top-0 space-y-3'>
                        <ClassCard1 
                        image="public/Image/Class08.png"/>
                        <div className='md:flex md:justify-between hidden'>
                            <p className='text-base font-normal text-zinc-500'>কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
                            <a href={`tel:${phoneNumber}`} className='flex items-center gap-x-2 bg-red-800 hover:bg-red-600 hover:text-[16px] text-[12px] text-white font-bold px-3 py-2 border rounded-xl'>
                                <FiPhoneCall />
                                <h2>{phoneNumber}</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class8;