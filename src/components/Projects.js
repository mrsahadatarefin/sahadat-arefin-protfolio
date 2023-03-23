import React from "react";
import img1 from "../assets/project/dior-club.jpg";
import img2 from "../assets/project/yacht-club.jpg";
import img3 from "../assets/project/doctor.jpg";

const Projects = () => {
  return (
    <div name="projects" className="bg-gradient-to-b from-black  to-gray-800 w-full text-white md-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Projects
          </p>
          <p className="py-6 ">Check out some of my work right here </p>
        </div>
        <div>

            <div>
                <img src="" alt="" />
                <div>
                    <button>Live</button>
                    <button>Client </button>
                    <button> server</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
