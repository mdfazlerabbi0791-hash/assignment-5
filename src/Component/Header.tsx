
import banner from '../assets/banner-stack.png'

export default function Header() {
    
    return (
        <>

        <div className='flex justify-between items-center md:flex-row container mx-auto'>
         <div className='w-174 '>
        <div className='leading-none pb-4'>
         <h1 className='text-[#0f172a] text-[60px] font-bold'>Build Your Ideal</h1>
        <h1 className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent text-[60px] font-bold">Development Stack</h1>
        </div>
        <p className='text-[#475569] pb-12'>Explore frontend, backend, database, and tooling options,<br /> compare them side by side, and put together the stack that fits your <br /> next project.</p>
        <div className='flex gap-3'>
            <button className='py-2 px-6 bg-[#f86e25] text-white rounded-[10px] '>Explore Technologies</button>
            <button className='py-2 px-14 border border-gray-200 rounded-[10px] '>Learn More</button>
        </div>
            </div>

            <div>
        <img src={banner} alt="banner" className='h-105' />
            </div>
        </div>
        
        </>
    )
}