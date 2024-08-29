"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y:"0%"}}
      transition={{duration: 1}}
    >
       <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mt-20">
       {/* IMAGE CONTAINER */}
       <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
         <Image 
         src="/hero2.png" 
         alt="profile image" 
         width={450} height={450} 
         className="object-contain" 
         style={{zIndex: 1}}
         />
       </div>
       {/* TEXT CONTAINER */}
       <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
         {/* TITLE */}
         <h1 className="text-4xl md:text-6xl font-bold">
         Nurturing Ideas, Building Tomorrow
         </h1>
         {/* DESC */}
         <p className="md:text-xl">
         Welcome to my digital journey! With the knowledge and skills gained from my computer engineering education, I am exploring new innovations in the realms of web development and DevOps. My portfolio showcases my continuously evolving skills and the determined steps I am taking towards future projects.
         </p>
         {/* BUTTONS */}
         <div className="w-full flex gap-4">
           <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
             View My Work
           </button>
           <button className="p-4 rounded-lg ring-1 ring-black">
             Contact Me
           </button>
         </div>
       </div>
     </div>
  </motion.div>
  );
};

export default Homepage;
