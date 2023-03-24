import React from 'react';
import img1 from '../assets/experience/html.png'
import img2 from '../assets/experience/css.png'
import img3 from '../assets/experience/javascript.png'
import img4 from '../assets/experience/tailwind.png'
import img5 from '../assets/experience/react.png'

import img6 from '../assets/experience/node.png'
import img7 from '../assets/experience/ExpressJS.png'
import img8 from '../assets/experience/pngwing.com.png'
import img9 from '../assets/experience/github.png'

const Expreience = () => {
    const experience = [
        {
        id:1,
        img:img1,
        title:'HTML',
        style:'shadow-orange-500'
    },
        {
        id:2,
        img:img2,
        title:'CSS',
        style:'shadow-blue-500'
    },
        {
        id:3,
        img:img3,
        title:'Javascript',
        style:'shadow-yellow-500'
    },
        {
        id:4,
        img:img4,
        title:'tailwind',
        style:'shadow-sky-500'
    },
        {
        id:5,
        img:img5,
        title:'React',
        style:'shadow-blue-600'
    },
        {
        id:6,
        img:img6,
        title:'Node js',
        style:'shadow-green-600'
    },
        {
        id:7,
        img:img7,
        title:'Express ',
        style:'shadow-gray-400'
    },
        {
        id:8,
        img:img8,
        title:'mongoDb ',
        style:'shadow-green-500'
    },

        {
        id:9,
        img:img9,
        title:'Github ',
        style:'shadow-gray-400'
    },
]
    return (

        <div name='experience' className=' bg-gradient-to-b from-gray-800 to-black w-full  h-screen '>
            <div data-aos="zoom-in" data-aos-duration="2000" className='max-w-screen-lg mx-auto pt-32  flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2  sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        experience.map(tech => 
                            <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`} key={tech.id}>
                                <img src={tech.img} alt=""  className='w-20 mx-auto'  />
                            <p className='mt-4'>{tech.title} </p>
                            </div> )
                    }
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Expreience;