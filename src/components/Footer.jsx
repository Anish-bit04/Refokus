import React from 'react'

const Footer = () => {
    let items = [
        "Privacy Policy", "Cookie Policy", "Impressum","Terms","Webflow Agency"
    ]
  return (
    <div className='max-w-screen-xl mx-auto text-zinc-600 bg-zinc-900 flex items-center justify-between py-5'>
        <div className='flex gap-10 '>{items.map((item,index)=> <p key={index} className='text-sm'>{item}</p>)}</div>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="Enterprise" />
        
    </div>
  )
}

export default Footer