import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const Card = ({width,start,para,hover="false"}) => {
    
  return (
    <motion.div whileHover={{backgroundColor:hover ==="true" && "#7443ff",padding:'25px'}} className={`bg-zinc-800 p-5 rounded-xl  ${width} min-h-[26rem] flex flex-col justify-between`}>
        <div className='w-full'>
            <div className='w-full flex justify-between items-center'>
                <h3>Get in Touch</h3>
            <MdArrowRightAlt/>
            </div>
            <h1 className='text-3xl font-medium mt-10'>Insight and behind <br />the scenes</h1>
        </div>
        <div className='w-full mt-30'>
        {
            start === true && (<>
             <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project </h1>
            <button className='rounded-full py-2 px-3 border-[1px] mt-5 border-zinc-500'>Contact Us</button>
            </>)
        }
            {
                para === true &&(
                    <p className='text-sm text-zinc-500 font-medium mt-5 '>Explore what drive your team.</p>

                )
            }

        </div>
    </motion.div>
  )
}

export default Card