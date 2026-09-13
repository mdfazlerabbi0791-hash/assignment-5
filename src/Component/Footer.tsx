
import logo from '../assets/logo-text.png'
export default function Footer() {
    
    return (

        <>
        <footer className='container mx-auto mt-20 px-4 mb-15 '>
            {/* first */}

        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 mb-20'>
    <div className='md:col-span-5'>
        <img src={logo} alt="logo" className='mx-auto md:mx-0' />
        <p className='pt-3 text-[#7f8897] text-center md:text-left'>
            Curated tools, technologies, and resources for developers building modern software.
        </p>
        <div className='mt-7'>
            <ul className='flex gap-6 justify-center md:justify-start'>
                <li className="after:content-['•'] md:after:content-none after:ml-3 after:text-[#121315] after:font-extrabold last:after:content-none">GitHub</li>
                <li className="after:content-['•'] md:after:content-none after:ml-3 after:text-[#030304] after:font-extrabold last:after:content-none">Twitter</li>
                <li>LinkedIn</li>
            </ul>
        </div>
    </div>

    <div className='hidden md:grid grid-cols-3 gap-6 md:col-span-7'>
        <div>
            <h3 className="font-bold mb-3">PRODUCT</h3>
            <ul className="space-y-2 text-[#7f8897]">
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
            </ul>
        </div>
        <div>
            <h3 className="font-bold mb-3">COMPANY</h3>
            <ul className="space-y-2 text-[#7f8897]">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
        </div>
        <div>
            <h3 className="font-bold mb-3">LEGAL</h3>
            <ul className="space-y-2 text-[#7f8897]">
                <li>Privacy Policy</li>
                <li>Terms Service</li>
            </ul>
        </div>
    </div>
</div>

                {/* second */}
             <div className='flex justify-between mt-10 text-[#afbaca] border-t border-gray-100 pt-10'>
                <div>@2026 Dev Stack All rights resrved</div>
                <div>
                    <ul className='flex gap-3'>
                     <li>Privacy</li>
                    <li>Terms</li>
                    </ul>
                </div>
            </div>
        </footer>
        
        
        </>
    )
}



