import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from bg-gray-800 to to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl ml-20   ">
          I am dedicated and passionate about web application development. I can
          convert a Figma design to a perfectly responsive website template &
          give them live using react.js. I can develop rest APIs using Node.js,
          Express.js and MongoDB & connect them with front-end single-page
          applications. I wish to use my technical skills to contribute to
          society.
        </p>
        <br />
        <p></p>
      </div>
    </div>
  );
};

export default About;
