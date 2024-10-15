
import { HERO_CONTENT } from './../constants/index';
import profilePic from '../assets/kevinRushProfile.png' ; 
import { motion } from 'framer-motion';

const container =(delay)=>({
  hidden :{
    x:-100 , opacity:0
  }, 
  visible :{
    x:0 , opacity:1,transition:0.5 , delay:delay 
  },
})
export default function Hero() {
  return (
    <div 
      className="border-b border-neutral-900 pb-4 lg:mb-36  ">
        
        <div className="flex flex-wrap">
             <div className="w-full lg:w-1/2">
                <div className="item-center lg:items-start flex flex-col ">
                    <motion.h1
                      variants={container(0)}
                      init
                     transition={{duration:0.5 , delay:2}}
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ">
                        Akash Singh
                    </motion.h1>
                    <motion.span
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight bg-clip-text text-3xl text-transparent">
                        Full Stack Developer
                    </motion.span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter"> 
                     {HERO_CONTENT}
                    </p>
                </div>
             </div>
              <div className='w-full lg:w-1/2 lg:p-8'>
                 <div className='flex justify-center'>
                   <img src={profilePic} alt="my image" />
                 </div>
              </div>

              
        </div>
      </div>
  )
}
