import React from 'react';
import img1 from '../assets/sahadat.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
const Home = () => {
    return (
        <div name='home' className=' h-screen  bg-gradient-to-b from-black to-gray-800 via-black text-white '>
           <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col  justify-center h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> I'm Full stack Developer</h2>
                <p className='text-gray-400 py-4 max-w-md'>
                    I have experience building and designing software.
                    Currently, I love to Work on Web application using technologies like
                 Html, Css, Javascript, Tailwind, bootstrap, React, node , express,mongoDB


                </p>
                <div>
                    <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to bg-blue-500 cursor-pointer'>Projects
                        <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={30}className="ml-1" /></span>
                    </button>
                </div>
            </div>
            <div>
                <img src={img1} alt="profile img" srcset=""  className=' rounded-2xl mx-auto w-2/3 md:w-full bg-gray-500'/>
            </div>
           </div>
        </div>
    );
};

export default Home;