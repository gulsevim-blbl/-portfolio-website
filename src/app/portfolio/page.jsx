"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: " RoseGlow",
    desc: " E-Commerce Site, Mern -Nodejs React Express.js Mongodb-  Technologies are used.",
    img: "/Ecommerce.png",
    link: "https://github.com/gulsevim-blbl/RoseGlow",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Admin Dashboard",
    desc: "Mern Technologies were used.",
    img: "/dashboard.png",
    link: "https://github.com/gulsevim-blbl/AdminDashboard",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: " ChatApp",
    desc: " It is a Real Time Chat application Project with Firebase.",
    img: "/chat.png",
    link: "https://github.com/gulsevim-blbl/ChatApp",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: " DevSecOps",
    desc: " a CI/CD process has been created for a project",
    img: "/devsecops.png",
    link: "https://github.com/gulsevim-blbl/DevSecOps",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w- md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-1 text-sm md:p-2 md:text-md lg:p- lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
          </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">For More Projects</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[300px] md:h-[300px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and Devops Eng.
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="https://github.com/gulsevim-blbl"
            target="_blank"
            className="w-20 h-20 md:w-26 md:h-26 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Click
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;