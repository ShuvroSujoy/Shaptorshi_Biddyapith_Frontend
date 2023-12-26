import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { handlerContext } from '../LayOut/MainLayOut';
const SignUp = () => {
    const handlers =useContext(handlerContext)
    const {onSubmitSignUp} =handlers;
    return (
        <div className='container mt-10 mb-10 flex items-center justify-center'>
            <div className=' md:w-[500px] w-full bg-white duration-500  shadow-lg hover:shadow-red-600 p-10 mt-8 mb-8 rounded-lg'>
                <h2 className='font-bold text-red-800 text-5xl text-center border-b-4 border-red-800 pb-10 '>Sign Up</h2>
                <form onSubmit={onSubmitSignUp} action="" className=' mt-5 flex justify-center flex-col relative'>
                    <div className='mb-5 flex gap-2 flex-col'>
                        <label htmlFor="Useremail" className='flex items-center gap-2'> Input Your Email </label>
                        <input
                            name='email'
                            type="email" placeholder='Type email' className=' px-5 py-2 rounded-full outline-none font-semibold' required />
                        <div className='border-b border-gray-700'></div>

                    </div>

                    <div className='mb-1 flex gap-2 flex-col'>
                        <label htmlFor="password " className='flex items-center gap-2'> Input Your Password</label>
                        <input
                            name='password'
                            type="password" placeholder='Type password' className='bg-transparent px-5 py-2 rounded-full outline-none  font-semibold' required />
                        <div className='border-b border-gray-700'></div>

                    </div>

                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex gap-4'>
                            <input type="checkbox" />
                            <h3>Remember Me</h3>
                        </div>

                    </div>

                    <button
                        type='submit' className='mt-5 w-full border mx-auto bg-red-600 hover:scale-110 duration-500  px-7 py-2 rounded shadow-md text-white text-xl font-bold'>
                        SignUp
                    </button>
                </form>
                <h2 className='mt-10 text-center '>Already haev a account? <Link to='/SignIn' className='underline text-blue-800'>SignIn here.</Link></h2>

            </div>
        </div>
    );
};

export default SignUp;