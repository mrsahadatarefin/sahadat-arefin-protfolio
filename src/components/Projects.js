import React from "react";
import img1 from "../assets/project/dior-club.jpg";
import img2 from "../assets/project/yacht-club.jpg";
import img3 from "../assets/project/doctor.jpg";

const Projects = () => {
    const projects = [
        {
        id:1,
        img:img1,
        name:'Dior club',
        live:'https://dior-clud.web.app/',
        client:'https://github.com/mrsahadatarefin/dior-clud',
        server:'https://github.com/mrsahadatarefin/dior-server'

    },
        {
        id:2,
        img:img2,
        name:'Yacht club',
        live:'https://yachtclub-eaf1a.web.app/',
        client:'https://github.com/mrsahadatarefin/yacht-club-client',
        server:'https://github.com/mrsahadatarefin/yacht-club-server'

    },
        {
        id:3,
        img:img3,
        name:'Doctor portal',
        live:'https://doctor-portal-b4fa2.web.app/',
        client:'https://github.com/mrsahadatarefin/doctors-portal',
        server:'https://github.com/mrsahadatarefin/doctor-portal-sarver'

    }
]
  return (
    <div name="projects" className="bg-gradient-to-b from-black  to-gray-800 w-full text-white md-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Projects
          </p>
          <p className="py-6 ">Check out some of my work right here </p>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:0">
            {projects.map(project =>    <div className=" shadow-md shadow-gray-600 rounded-lg">
                <img src={project.img}  alt="" className='rounded-md duration-300 hover:scale-105 h-[250px] w-full' />
                <div className=" flex items-center justify-center ">
                   <a href={project.live} target="_blank" rel="noopener noreferrer"> <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Live</button></a>
                   <a href={project.client} target="_blank" rel="noopener noreferrer"> <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Client  </button></a>
                   <a href={project.server} target="_blank" rel="noopener noreferrer">  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> server</button></a>
                </div>
            </div> )}

        
        </div>
      </div>
    </div>
  );
};

export default Projects;
