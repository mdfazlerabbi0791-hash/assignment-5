
import banner from '../assets/banner-stack.png'

export default function Header() {
    
    return (
        <>

        <div className="container mx-auto px-5 md:px-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-30 py-7 md:py-10">

        
        <div className="w-full md:w-1/2">

            <div className="leading-none pb-4">
                <h1 className="text-[#0f172a] text-4xl sm:text-6xl md:text-[70px] font-bold">
                    Build Your Ideal
                </h1>

                <h1 className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent text-4xl sm:text-6xl md:text-[70px] font-bold">
                    Development Stack
                </h1>
            </div>

            <p className="text-[#475569] pb-8 md:pb-12 text-base md:text-lg leading-7">
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that
                fits your next project.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
                <button className="py-3 px-6 bg-[#f86e25] text-white rounded-[10px]">
                    Explore Technologies
                </button>

                <button className="py-3 px-14 border border-gray-200 rounded-[10px]">
                    Learn More
                </button>
            </div>

        </div>


        <div className="w-full md:w-1/2 flex justify-center">
            <img
                src={banner}
                alt="banner"
                className="w-full max-w-md md:max-w-xl h-auto object-contain"
            />
        </div>

    </div>
</div>
        
        </>
    )
}