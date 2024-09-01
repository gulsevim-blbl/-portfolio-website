"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import NavLink from './navLink';
import {motion} from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/gulsevim-blbl",
    src: "/github.png",
    alt: "GitHub",
    width: 24,
    height: 24
  },
  {
    href: "https://www.linkedin.com/in/gulsevimbulbul/",
    src: "/linkedin.png",
    alt: "LinkedIn",
    width: 24,
    height: 24
  },
  {
    href: "https://medium.com/@gulsevimblbl",
    src: "/medium.png",
    alt: "Medium",
    width: 27,
    height: 27
  },
  {
    href: "https://stackoverflow.com/users/26786352/g%c3%bcl-sevim-b%c3%bclb%c3%bcl",
    src: "/stack-overflow.png",
    alt: "Stack Overflow",
    width: 24,
    height: 24
  }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const topVariants={
      closed:{
        rotate:0,
      },
      opened:{
        rotate:45,
        backgroundColor: "rgb(255,255,255)",
      }
  }

  const centerVariants={
    closed:{
      opacity:1,
    },
    opened:{
      opacity:0,
    }
}

const bottomVariants={
  closed:{
    rotate:0,
  },
  opened:{
    rotate:-45,
    backgroundColor: "rgb(255,255,255)",
  }
}

const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};


  // Overflow hidden durumunu uygulamak için useEffect kullanın
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3 ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

       {/* LOGO */}
       <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Gül Sevim</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            Bülbül
          </span>
        </Link>
      </div>

      {/* Social */}
      <div className='hidden md:flex gap-4 w-1/3'>
        {socialLinks.map((social, index) => (
          <Link 
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer"
            key={index}
          >
            <Image src={social.src} alt={social.alt} width={social.width} height={social.height}/>
          </Link>
        ))}
      </div>

      {/* Responsive menu */}
      <div className='md:hidden'>
        {/* Menu Button */}
        <button 
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setOpen(!open)}
        > 
          <motion.div 
          variants={topVariants} 
          animate={open ? "opened" : "closed"}
          className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
          <motion.div 
          variants={centerVariants} 
          animate={open ? "opened" : "closed"}
          className='w-10 h-1 bg-black rounded'
          ></motion.div>
          <motion.div 
          variants={bottomVariants} 
          animate={open ? "opened" : "closed"}
          className='w-10 h-1 bg-black rounded origin-left'
          ></motion.div>
        </button>

        {/* Menu List */}
        {open && (
          <motion.div  variants={listVariants} initial="closed" animate="opened"
            className='fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'
            >
            {links.map(link => (
              <motion.div variants={listItemVariants} className='' key={link.title}>
                 <Link href={link.url} onClick={() => setOpen(false)}>
                    {link.title}
                </Link>
              </motion.div>
             
            ))}

            {/* Social Links for Responsive Menu */}
            <motion.div variants={listItemVariants} className="flex gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <Link 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Image src={social.src} alt={social.alt} width={social.width} height={social.height}/>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;