import React, { useState, useEffect } from 'react';
import { CgArrowTopRight } from "react-icons/cg";
import img1 from "./../../public/assets/img1.webp"

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const headings = [
    { 
      title: "Engineering peace of mind", 
      color: "#FF6A47", 
      content: "Vention developers partner with innovative companies from startups to Fortune 500s, lending the AI engineering expertise to propel them to new heights and the edge to outpace the competition.",
      buttonColor: "#FF6A47"
    },
    { 
      title: "International Invention Day", 
      color: "#FF6FFF", 
      content: "On May 16, Vention kicks off International Invention Day, celebrating human creativity and game-changing inventions. Until June 30, you’ll also have a chance to join the In:Vention Incubator and win 12 weeks of our top-tier services worth $150K USD in in-house software development..",
      buttonColor: "#FF6FFF"
    },
    { 
      title: "AI innovation", 
      color: "#FF6A47", 
      content: "As pioneers in AI engineering, we view it as more than a shiny tool: it's a pillar of the new business normal. Those companies that embrace and leverage AI will set the standard and lead in their category. In our new State of AI report, we look at funding, investment, and valuation trends across the AI market.",
      buttonColor: "#FF6A47"
    },
    { 
      title: "Expert software development", 
      color: "#3155FF", 
      content: "Get it done right — the first time. Our proven software expertise and engagement flexibility mean you don’t have to worry about timelines, processes, or outcomes. Proficient in web, mobile, cloud, and advanced tech like AI and VR, we empower you to innovate and grow your business at the scale and speed of future trends.",
      buttonColor: "#3155FF"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="common border-b">
      <div className='top container my-0 mx-auto'>
        <div className="top flex items-center gap-[30%]">
          <h1 className={`w-[880px] h-[190px] text-[62px] leading-none py-[30px] px-[30px] flex items-center ml-[-15px]`} style={{ backgroundColor: headings[activeIndex].color }}>
            {headings[activeIndex].title}
          </h1>
          <ul className="flex items-center space-x-20 mt-[130px] mr-[15px]">
            {headings.map((_, index) => (
              <li key={index} className={`relative transition-all duration-500`}>
                <a href="#" className={`block transition-all duration-500 ${activeIndex === index ? 'text-black' : 'text-gray-500'}`}>
                  {`0${index + 1}`}
                  <div className={`absolute top-[-10px] left-[-10px] transition-all duration-500 ${activeIndex === index ? 'w-[calc(100%+30px)] border-t-4 border-black' : 'w-[calc(100%+30px)] border-t-2 border-gray-500'}`}></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom container my-0 mx-auto flex items-center">
        <div className="left w-[50%] pl-[300px]">
          <p className="mb-6 pt-[205px]">{headings[activeIndex].content}</p>
          <button className="flex items-center gap-[80px] p-5 border border-solid bg-[#FF6A47] pr-[40px]" style={{ backgroundColor: headings[activeIndex].buttonColor }}>
            Get an estimate
            <CgArrowTopRight className='mt-[3px] bg-transparent' />
          </button>
        </div>
        <div className="right w-[50%]">
          <img src={img1} alt="" className='w-[100%]' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
