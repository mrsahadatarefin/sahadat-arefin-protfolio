import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to bg-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/386073b3-6ebc-459a-acf0-9798d559a684" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your  name"
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <textarea
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className=" w-fit px-6 py-3 mx-auto my-8 flex items-center rounded-md text-white bg-gradient-to-r from-cyan-500 to bg-blue-500 cursor-pointer hover:scale-105 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
