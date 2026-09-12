
import logo from '../assets/logo-text.png'

export default function Navber() {
    
    return (
        <>
       <nav className=' py-5 border-b border-gray-100 '>
         <div className=' flex justify-between items-center container mx-auto'>     
             <div>
                <img src={logo} alt="logo.png"/>
             </div>
            <ul className=' hidden md:flex gap-7'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='flex gap-3'>
                <button className='border-none'>Sign in</button>
                <button className='bg-[#d91b7e] text-white py-2 px-4 rounded-3xl'>Sign Up</button>
            </div>
        </div>
       </nav>

    
        </>
    )
}