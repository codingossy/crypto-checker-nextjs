import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../framer/FramerMotion';



const StoriesCard = ( { id, stories, active, setActive, handleClick }) => {
  return (
    <motion.div
    variants={fadeIn('right', 'spring', id * 0.5, 0.75)} 
        className={`relative ${
            active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center w-full h-[65vh] object-cover transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `}
        onClick={() => handleClick(id)}
    >
        <Image 
        src={stories.img}
        width={1000}
        height={1000}
        className='absolute rounded-sm object-cover w-full h-full'
        alt='image'
        />

        {active !== id ? (
            <h3 className="font-semibold text-xs md:text-sm text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
                {stories.title}
            </h3>
        ) : (
            <div className="absolute bottom-0 p-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)]">
                    <p className='text-blue-500 text-xl capitalize font-semibold'>{stories.name}</p>
                    <h2 className=" font-semibold capitalize text-xs md:text-sm text-white">{stories.title}</h2>
            </div>
        )}

    </motion.div>
  )
}

export default StoriesCard