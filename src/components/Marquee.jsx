import React from 'react'

const Marquee = ({imgurl}) => {
  return (
    <div className='flex items-center gap-14 w-full whitespace-nowrap overflow-hidden'>
        {imgurl.map(url => <img src={url} alt='logo' className='w-32 flex-shrink-0 mt-14'/>)}
        {imgurl.map(url => <img src={url} alt='logo' className='w-32 flex-shrink-0 mt-14'/>)}
    </div>
  )
}

export default Marquee