import React, { useContext, useState } from 'react';
import { MdMobileFriendly } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { Drawer, Tooltip } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { handlerContext, userContent } from '../LayOut/MainLayOut';
// import { TbMailCheck } from "react-icons/tb";
const Header = () => {
    const phoneNumber = '+8801628-190818';
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useContext(userContent)
    const handlers = useContext(handlerContext)
    const { googleSignOutHandler } = handlers;
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const items = [
        {
            label: <Link href="#">টিচার একাউন্ট </Link>,
            key: '0',
        },
        {
            label: <Link href="#">স্টুডেন্ট একাউন্ট </Link>,
            key: '1',
        },

    ];
    return (
        <div className='container'>
            {/* Navbar */}
            <nav className='flex justify-between items-center gap-x-5 md:px-10 border-b-2 py-5  '>
                <div className='flex items-center font-SptFont gap-x-1 '>
                    <img className='h-[50px] w-[60px]' src="public/Image/SptLogo2.png" alt="" />
                    <p className='uppercase md:text-3xl text-xl text-red-600 hover:text-red-800 lg:font-extrabold font-bold'><Link to='/'>সপ্তর্ষী বিদ্যাপীঠ</Link></p>
                </div>
                <div className='lg:flex gap-x-5 hidden items-center'>
                    <Link to='/' className='text-xl font-SptFont text-red-800 hover:text-red-600'>হোম</Link>
                    <Link to='/course' className='text-xl font-SptFont text-red-800 hover:text-red-600'>সেবা সমূহ</Link>
                    <Link to='/aboutus' className='text-xl font-SptFont text-red-800 hover:text-red-600'>আমাদের-সম্পর্কে</Link>
                    <Link to='/admission' className='text-xl font-SptFont text-red-800 hover:text-red-600'>ভর্তি</Link>
                    <div>
                        {
                            users?.uid ?
                                ""
                                :
                                <div className='flex gap-5'>
                                    <Link to='/SignIn' className='text-xl font-SptFont text-red-800 hover:text-red-600'>সাইন ইন</Link>
                                    <Link to='/SignUp' className='text-xl font-SptFont text-red-800 hover:text-red-600'>সাইন আপ </Link>
                                </div>

                        }
                    </div>

                </div>
                <a href={`tel:${phoneNumber}`} className='group flex items-center gap-x-2'>
                    <MdMobileFriendly size={25} className='text-red-800 group-hover:text-red-600 font-bold hidden lg:flex md:flex' />
                    <p className='text-2xl font-SptFont text-red-800 group-hover:text-red-600 hidden lg:flex md:flex'>{phoneNumber}</p>
                </a>
                {
                    users?.uid ? <Tooltip title={<div className='p-5 '>
                        <h1 className='text-center underline text-2xl'>একাউন্ট</h1>
                        <div className='mt-5'>
                            <h2 className='text-2xl'> {users?.displayName}</h2>
                            <h2> {users?.email}</h2>
                            <button onClick={googleSignOutHandler} className='hover:underline mt-5 rounded-md hover:text-xl bg-red-800 hover:bg-red-600 px-3 py-1'>সাইন আউট</button>
                        </div>
                    </div>}>
                        <div>
                            {
                                users?.photoURL ? <div className='border rounded-full w-[45px] h-[45px] overflow-hidden'>
                                    <img src={users?.photoURL} alt='profile image'
                                        className='w-full' />
                                </div> : <h2 className='text-xl font-SptFont text-red-800 hover:text-red-600 '>প্রোফাইল &#11206;</h2>
                            }
                        </div>

                    </Tooltip> : ''
                }
                {/* <div className='group flex items-center gap-x-2'>
                <TbMailCheck size={30} className='text-red-800 group-hover:text-red-600'/>
                <p className='text-xl text-red-800 group-hover:text-red-600'>shaptorshebiddyapith2012@gmail.com</p>
                </div> */}
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <BiMenu onClick={showDrawer} size={40} className='text-red-800' />
                    <Drawer placement="left" onClose={onClose} open={open}>
                        <div className='flex flex-col gap-y-5 items-center'>
                            <Link to='/' className='text-xl font-SptFont text-red-800 hover:text-red-600'>হোম</Link>
                            <Link to='/course' className='text-xl font-SptFont text-red-800 hover:text-red-600'>সেবা সমূহ</Link>
                            <Link to='/aboutus' className='text-xl font-SptFont text-red-800 hover:text-red-600'>আমাদের-সম্পর্কে</Link>
                            <Link to='/admission' className='text-xl font-SptFont text-red-800 hover:text-red-600'>ভর্তি</Link>
                            <div>
                                {
                                    users?.uid ?
                                        ""
                                        :
                                        <div className='flex gap-5'>
                                            <Link to='/SignIn' className='text-xl font-SptFont text-red-800 hover:text-red-600'>সাইন ইন</Link>
                                            <Link to='/SignUp' className='text-xl font-SptFont text-red-800 hover:text-red-600'>সাইন আপ </Link>
                                        </div>

                                }
                            </div>
                            <a href={`tel:${phoneNumber}`} className='group flex items-center gap-x-2'>
                                <MdMobileFriendly size={25} className='text-red-800 group-hover:text-red-600 font-bold hidden lg:flex md:flex' />
                                <p className='text-2xl font-SptFont text-red-800 group-hover:text-red-600 hidden lg:flex md:flex'>{phoneNumber}</p>
                            </a>
                            {
                                users?.uid ? <Tooltip title={<div className='p-5 '>
                                    <h1 className='text-center underline text-2xl'>একাউন্ট</h1>
                                    <div className='mt-5'>
                                        <h2> {users?.displayName}</h2>
                                        <h2> {users?.email}</h2>
                                        <button onClick={googleSignOutHandler} className='hover:underline mt-5 bg-[#512DA9] px-3 py-1'>সাইন আউট</button>
                                    </div>
                                </div>}>
                                    <div className='lg:flex hidden'>
                                        {
                                            users?.photoURL ? <div className=' border rounded-full w-[45px] h-[45px] overflow-hidden'>
                                                <img src={users?.photoURL} alt='profile image'
                                                    className='w-full' />
                                            </div> : <h2 className='text-xl font-SptFont text-red-800 hover:text-red-600 '>প্রোফাইল &#11206;</h2>
                                        }
                                    </div>

                                </Tooltip> : ''
                            }
                        </div>
                    </Drawer>
                </label>
            </nav>
        </div>
    );
};

export default Header;
