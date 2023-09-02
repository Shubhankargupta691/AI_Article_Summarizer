import React from "react";
import {logo} from '../assets';



const Hero = () => {
  return (
      
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex  justify-between items-center  w-full mb-10 pt-5">
      <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
      
      <button type="button" onClick={() => window.open("https://github.com/Shubhankargupta691", "_blank")} className="black_btn">
        GitHub
      </button>
      </nav>

      
      <h1 className="head_text shadow-2xl p-5 m-10">
         Summarize Articles with <br className="mx-md:hidden" />
         
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      
      <div className="shadow-2xl p-5 m-5 blue_gradient flex flex-col">
      <h2 className="flex font-semibold mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left">
        Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries.
      </h2>
      </div>


    </header>
  );
};

export default Hero;