import React from "react";
import img1 from '../assets/about.jpg'

const About = () => {
  return (







    
    <div name="about" className="w-full h-[700px]  bg-gradient-to-b from bg-gray-800 to to-black via-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col p-4 lg:pt-20 justify-center w-full h-full">
        <div className="" >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ' > 


           <div>
           <img src={img1} alt="profile img"  className=' rounded-2xl mx-auto w-2/3 md:w-full bg-gray-500'/>


           </div>

        <div>

        <p className="text-xl ml-20 " >
          I am dedicated and passionate about web application development. I can
          convert a Figma design to a perfectly responsive website template &
          give them live using react.js. I can develop rest APIs using Node.js,
          Express.js and MongoDB & connect them with front-end single-page
          applications. I wish to use my technical skills to contribute to
          society.
        </p>
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default About;
