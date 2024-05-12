import React from 'react'
import Product from './Product'

const Products = () => {
    let products = [
        {
            title:"Arqitel",
            description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true,
            case:false
        },
        {
            title:"Cula",
            description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live:true,
            case:false
        },
        {
            title:"TTR",
            description:"We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
            live:true,
            case:false
        },
        {
            title:"Like Magic",
            description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live:true,
            case:true
        }
    ]

  return (
    <div className='bg-zinc-900 mt-15 '>
       {products.map((val,index) => <Product key={index} val={val}/>)}
    </div>
  )
}

export default Products