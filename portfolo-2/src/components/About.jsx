
import { ABOUT_TEXT, HOBBEY_TEXT } from '../constants' ;
import {motion} from 'framer-motion' ; 
import CssDoodle from './CssDoodle';
export default function About() {
  return (
    <div  className="border-b border-neutral-900 pb-4 ">
        <h1 className="my-20 text-center text-4xl">
            About  <span className="text-neutral-500"> Me
            </span></h1>
         <div className='flex flex-wrap'>

         <motion.div
          whileInView={{opacity: 1 , x:0 }}
          initial={{opacity: 0 , x:-100}}
          transition={{duration:0.5}}
          className="w-full  lg:w-1/2 lg:p-8 lg:pt-0 ">
             <div className="flex items-center justify-center">
               <CssDoodle/>
             </div>
             
          </motion.div>

         <motion.div
         whileInView={{opacity: 1 , x:0}}
         initial={{opacity: 0 , x:100}}
         transition={{duration:0.5}}
         className='w-full lg:w-1/2'>
                  <div className='flex justify-center  lg:justify-start lg:pr-40'>
                     <div>
                     <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                     <p className='my-2 max-w-xl py-6'>{HOBBEY_TEXT}</p>
                     </div>
                  </div>
                </motion.div>
         </div>
    </div>
  )
}
