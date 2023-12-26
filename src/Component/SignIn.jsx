import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { handlerContext } from '../LayOut/MainLayOut';
const SignIn = () => {
    const handlers =useContext(handlerContext)
    const {googleSigninHandler, GithubSigninHandler, onSubmitSignIn} =handlers;
    return (
        <div className='container flex items-center justify-center'>
            <div className='md:w-[500px] w-full bg-white duration-500  shadow-lg hover:shadow-red-600 p-10 mt-8 mb-8 rounded-lg'>
                <h2 className='font-bold text-5xl text-center border-b-4 border-gray-700 pb-10 text-red-800 font-SptFont'>Login</h2>
                <form onSubmit={onSubmitSignIn} action="" className=' mt-5 flex justify-center flex-col relative'>
                    <div className='mb-5 flex gap-2 flex-col'>
                        <label htmlFor="Useremail" className='flex items-center gap-2'>  Useremail</label>
                        <input
                            name='email'
                            type="text" placeholder='Type email' className=' px-5 py-2 rounded-full outline-none font-semibold' />
                        <div className='border-b border-gray-700'></div>
                    </div>

                    <div className='mb-1 flex gap-2 flex-col'>
                        <label htmlFor="password " className='flex items-center gap-2'>  Password</label>
                        <input
                            name='password'
                            type="password" placeholder='Type password' className='bg-transparent px-5 py-2 rounded-full outline-none  font-semibold' />
                        <div className='border-b border-gray-700'></div>
                        
                    </div>

                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex gap-4'>
                            <input type="checkbox"  />
                            <h3>Remember Me</h3>
                        </div>
                        <h3 className='text-right hover:underline hover:text-blue-800'><Link to='#'>Forget Password </Link> </h3>
                    </div>

                    <button
                        type='submit' className='mt-5 w-full border mx-auto bg-blue-600 hover:scale-110 duration-500  px-7 py-2 rounded shadow-md text-white text-xl bg-red-600 font-bold'>
                        Login
                    </button>
                </form>
                <p className='my-5 text-center'>-OR-</p>
                <div className=' md:flex gap-5  relative'>
                    <button
                        onClick={googleSigninHandler}
                        type='button' className='mt-5 w-full border mx-auto bg-orange-800  hover:scale-110 duration-500  px-7 py-2 rounded-md shadow-md text-white text-xl font-semibold'>
                        Google
                    </button>
                    <button
                        onClick={GithubSigninHandler}
                        type='button' className='mt-5 w-full border mx-auto bg-red-800  hover:scale-110 duration-500  px-7 py-2 rounded-md shadow-md text-white text-xl font-semibold'>
                        GithHub
                    </button>
                </div>
                <h2 className='mt-10 text-center '>Create a new ? <Link to='/SignUp' className='underline text-blue-800'>SignUp here..</Link></h2>
            </div>
        </div>
    );
};

export default SignIn;