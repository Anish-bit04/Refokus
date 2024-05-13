import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  let products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: false,
    },
    {
      title: "Like Magic",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
    },
  ];
  const [pos, setPos] = useState(0);

  const mover = (val) =>{
    setPos(val*23);
  }

  return (
    <div className="bg-zinc-900 mt-15 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover}count={index}/>
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{y:pos +`rem`}}
          transition={{ease:[0.76, 0, 0.24, 1],duration: 0.5}}
          className="absolute w-[32rem] h-[23rem] bg-white left-[44%]  overflow-hidden"
        >
          <motion.div
           transition={{ease:[0.76, 0, 0.24, 1],duration: 0.5}}
          animate={{y: -pos +`rem`}}  className="w-full h-full bg-sky-100"></motion.div>
          <motion.div 
           transition={{ease:[0.76, 0, 0.24, 1],duration: 0.5}}
          animate={{y: -pos +`rem`}} className="w-full h-full bg-sky-300"></motion.div>
          <motion.div 
           transition={{ease:[0.76, 0, 0.24, 1],duration: 0.5}}
          animate={{y: -pos +`rem`}} className="w-full h-full bg-sky-400"></motion.div>
          <motion.div
           transition={{ease:[0.76, 0, 0.24, 1],duration: 0.5}}
          animate={{y: -pos +`rem`}} className="w-full h-full bg-sky-500"></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
