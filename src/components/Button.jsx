import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Get Started"}) => {
  return (
    <div className='bg-zinc-100 text-black h-9 w-40 rounded-full px-3 py-2 flex items-center justify-center gap-3'>
      <span className=' text-sm font-medium'>{title}</span>
      <IoIosReturnRight />
    </div>
  )
}

export default Button