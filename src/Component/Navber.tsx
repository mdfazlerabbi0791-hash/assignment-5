
import logo from '../assets/logo-text.png'

export default function Navber() {
    
    return (
        <>
       <nav className=' py-5 border-b border-gray-100 sticky top-0 z-50 bg-white shadow-sm w-full'>
         <div className=' flex justify-between items-center container mx-auto'>     
             <div>
                <img src={logo} alt="logo.png"/>
             </div>
            <ul className=' hidden md:flex gap-7'>
                <li className='cursor-pointer hover:text-[#d91b7e]'>Home</li>
                <li className='cursor-pointer hover:text-[#d91b7e]'>Technologies</li>
                <li className='cursor-pointer hover:text-[#d91b7e]'>Projects</li>
                <li className='cursor-pointer hover:text-[#d91b7e]'>About</li>
                <li className='cursor-pointer hover:text-[#d91b7e]'>Contact</li>
            </ul>

            <div className='flex gap-3'>
                <button className='border-none cursor-pointer'>Sign in</button>
                <button className='bg-[#d91b7e] text-white py-2 px-4 rounded-3xl cursor-pointer'>Sign Up</button>
            </div>
        </div>
       </nav>

    
        </>
    )
}







