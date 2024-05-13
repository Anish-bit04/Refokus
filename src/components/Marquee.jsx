import { motion } from 'framer-motion'
import React from 'react'

const Marquee = ({imgurl,direction}) => {
  
  return (
    <div className='flex w-full overflow-hidden'>
      <motion.div 
      initial={{x:direction ==="left" ?'0':'-100%'}}
      animate={{x:direction ==="left" ?'-100%':'0' }}
      transition={{repeat:Infinity,ease: "linear",duration:15}} 
      className='flex flex-shrink-0 gap-40 py-10 pr-40'>
      {imgurl.map((url,index) => <img key={index} src={url} alt='logo' className='w-32 flex-shrink-0 mt-14'/>)}
      </motion.div>
      <motion.div 
      initial={{x:direction ==="left" ?'0':'-100%'}}
      animate={{x:direction ==="left" ?'-100%':'0'}}
      transition={{repeat:Infinity,ease: "linear",duration:15}} 
      className='flex flex-shrink-0 gap-40 py-10 pr-40'>
      {imgurl.map((url,index) => <img key={index} src={url} alt='logo' className='w-32 flex-shrink-0 mt-14'/>)}
      </motion.div>
      
    </div>
  )
}

export default Marquee