import { FaLinkedin,  } from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaTwitterSquare} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className=" mb-20  flex items-center justify-between py-6 pb-4">
       <div className="flex flex-shrink-0 items-center">
         <span className="font-bold text-5xl">A<span className='text-5xl font-thin'>k</span></span>
       </div>
       <div className='m-8 flex  items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/akash4345"><FaLinkedin/></a>
        <a href="https://www.github.com/Akashssss"><FaGithub/></a>
        <a href="#"><FaTwitterSquare/></a>
        <a href=""><FaInstagram/></a>
       </div>
    </nav>
  )
}
