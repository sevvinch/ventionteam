import React from 'react'
import Avatar from "./../../public/assets/Ravi_Srikantan.webp"
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

const Engineers = () => {
  return (
    <div>
        <div className="container my-0 mx-auto bg-[#FF6FFF] flex items-center gap-[120px] pl-[30px] pr-[20px] pt-[85px] pb-[6px] mb-[20px] ml-[137px]">
            <div className="left">
                <img src={Avatar} alt="" className='mb-6 w-[350px] mt-[-40px]' />
                <h2 className="bg-transparent mb-[12px] font-semibold text-[19px]">Benjamin Maisano</h2>
                <p className="bg-transparent text-[15px] mb-[300px]">CTO at Mount Sinai</p>
                <div className=" flex items-center gap-5">
                    <FiArrowLeftCircle  className='w-9 h-9' text-grey/>
                    <FiArrowRightCircle  className='w-9 h-9'/>
                </div>
            </div>
            <div className="right">
                <h3 className='bg-transparent font-semibold text-[32px] mb-[80px] tracking-wider mt-[-330px]'> "Vention has provided very talented engineers across web Ul, mobile, backend APIs, and  
                system designs, to data integrations and beyond.
                </h3>
                <p className="bg-transparent">Their staff integrated quickly and were dedicated to the internal teams throughout the relationship, acting as <br /> long term partners in our strategic digital efforts."</p>
                </div>

        </div>
    </div>
  )
}

export default Engineers