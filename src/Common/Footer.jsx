import React, { useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { MdMobileFriendly } from "react-icons/md";
import { TbMailCheck } from "react-icons/tb";
import { BiSend } from 'react-icons/bi';
import { FiPhoneCall } from "react-icons/fi"
const Footer = () => {
    const emailAddress = 'shaptorshebiddyapith2012@gmail.com';
    const facebookUrl = 'https://www.facebook.com/shaptorshe.2012';
    const googleMapsUrl = "https://maps.app.goo.gl/kyBGbRq5Bzivkq4z8";
    const whatsappId = '1319775409';
    const whatsappUrl = `https://wa.me/${whatsappId}`;
    const phoneNumber = '01628-190818';
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const handleInputChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        setIsValidEmail(validateEmail(inputEmail));
    };
    const handleSendClick = () => {
        if (isValidEmail) {
            console.log('Email sent successfully:', email);
            setEmail('');
        } else {
            console.error('Invalid email address. Please enter a valid email.');
        }
    };
    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    };
    return (
        <div className='bg-zinc-950 container'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-y-20 p-5'>
                {/* 1st Footer */}
                <div className='flex flex-col  items-center gap-y-2'>
                    <img className='h-[110px] w-[130px] ' src="public/Image/SptLogo2.png" alt="" />
                    <h1 className='text-3xl text-red-600 font-bold'>সপ্তর্ষী <span className='text-base font-SptFont text-red-600'>Eductaion Project</span></h1>

                    <div className='flex items-center gap-2 group'>
                        <IoHomeSharp size={20} className='text-base text-white group-hover:text-red-600' />
                        <p className='text-base text-white group-hover:text-red-600'>31,Lower Jashore Road,Khulna Sadar, Khulna.</p>
                    </div>
                    <div className='flex items-center gap-2 group'>
                        <IoHomeSharp size={20} className='text-base text-white group-hover:text-red-600' />
                        <p className='text-base text-white group-hover:text-red-600'>03,Fire Brigade Road,Khulna Sadar, Khulna.</p>
                    </div>
                </div>
                {/* 2nd Footer */}
                <div className='flex flex-col justify-start items-start gap-y-2'>
                    <h1 className='text-3xl text-red-600 font-bold'>উদ্দীপনা</h1>
                    <div className='flex justify-center items-center gap-2 hover:ml-[3px] text-white hover:text-red-600'>
                        <BsFillArrowRightSquareFill size={20}  />
                        <p className='text-base'>প্রতি মাসে সর্বোচ্চ উপস্থিতি পুরস্কার প্রদান</p>
                    </div>
                    <div className='hover:textred-600 text-white flex justify-center items-center gap-2 hover:ml-[3px] text-white hover:text-red-600'>
                        <BsFillArrowRightSquareFill size={20} />
                        <p className='text-base'>সাপ্তাহিক PRESENTATION পুরস্কার প্রদান</p>
                    </div>
                    <div className='hover:textred-600 text-white flex justify-center items-center gap-2 hover:ml-[3px] hover:text-red-600'>
                        <BsFillArrowRightSquareFill size={20}/>
                        <p className='text-base'>প্রতি মাসে শ্রেষ্ঠ PRESENTATOR/DEBATOR পুরস্কার প্রদান </p>
                    </div>
                    <div className='hover:textred-600 text-white hover:text-red-600 flex justify-center items-center gap-2 hover:ml-[3px]'>
                        <BsFillArrowRightSquareFill size={20}  />
                        <p className='text-base '>অর্ধ-বার্ষিকী মূল্যায়ন পুরস্কার প্রদান</p>
                    </div>
                    <div className='hover:textred-600 text-white hover:text-red-600 flex justify-center items-center gap-2 hover:ml-[3px]'>
                        <BsFillArrowRightSquareFill size={20}  />
                        <p className='text-base'>বার্ষিক মূল্যায়ন পুরস্কার প্রদান</p>
                    </div>
                    <div className='hover:textred-600 text-white hover:text-red-600 flex justify-center items-center gap-2 hover:ml-[3px]'>
                        <BsFillArrowRightSquareFill size={20}  />
                        <p className='text-base'>বার্ষিক শিক্ষা সফর</p>
                    </div>
                </div>
                {/* 3rd Footer */}
                <div className='flex flex-col gap-y-5 font-SptFont md:px-5'>
                    <h1 className='text-2xl text-red-600 font-bold'>Keep up with us at</h1>
                    <div className='flex items-center gap-x-1'>
                        <MdMobileFriendly size={20} className='text-red-800' />
                        <h3 className=' text-white font-SptFont hover:text-red-600'>+01912-667044 (08:00am-09:00pm)</h3>
                    </div>
                    <a href={`mailto:${emailAddress}`} className='flex items-center gap-x-1'>
                        <TbMailCheck size={20} className='text-red-800' />
                        <h3 className='text-white font-SptFont hover:text-red-600 hover:underline'>{emailAddress}</h3>
                    </a>
                    <div className='flex justify-between h-12 w-10/12 bg-zinc-200 border-white rounded-md'>
                        <input
                            type='email'
                            placeholder='Send Your Email Address'
                            value={email}
                            onChange={handleInputChange}
                            className={`border w-full rounded-md px-5 font-Inter ${isValidEmail ? 'border-0 bg-zinc-200' : 'border-red-500'
                                }`} />
                        <button
                            onClick={handleSendClick}
                            className='h-12 w-1/6 flex justify-center items-center text-red-800 hover:text-red-600 bg-zinc-200 rounded-r-md cursor-pointer' >
                            <BiSend size={30} />
                        </button>
                    </div>
                    {/* <h2 className='text-2xl text-red-600 font-bold'>Qick Touch</h2> */}
                    <div className='flex gap-x-5 justify-start'>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                            <div className='h-[40px] w-[40px] border rounded-md hover:bg-red-600 hover:bg-opacity-40'>
                                <BsFacebook size={20} className='text-blue-600 m-2' />
                            </div>
                        </a>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <div className='h-[40px] w-[40px] border rounded-md hover:bg-red-600 hover:bg-opacity-40'>
                                <BsWhatsapp size={20} className='text-green-400 m-2' />
                            </div>
                        </a>
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            <div className='h-[40px] w-[40px] border rounded-md hover:bg-red-600 hover:bg-opacity-40'>
                                <SlLocationPin size={20} className='text-green-400 m-2' />
                            </div>
                        </a>
                        <a href={`tel:${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                            <div className='h-[40px] w-[40px] border rounded-md hover:bg-red-600 hover:bg-opacity-40'>
                                <FiPhoneCall size={20} className='text-blue-600 m-2' />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;