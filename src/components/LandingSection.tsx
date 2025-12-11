export default function LandingSection(){
    return(
        <>
            <div className="absolute top-0 left-0 z-0 h-2000">
                <img src="landingBackground.jpg" style={{
                    WebkitMaskImage:
                    "radial-gradient(circle at center, var(--color-onyx) 20%, transparent 100%)",
                    maskImage:
                    "radial-gradient(circle at center, var(--color-onyx) 20%, transparent 100%)",}}>    
                </img>
            </div>
            <div className="relative px-8 lg:px-60 pt-48 lg:grid lg:grid-cols-2 z-5">
                <div className="lg:p-16">
                    <h1 className="text-white lg:text-7xl text-4xl">Design that’s clear, fast, and built to perform.</h1>
                    <h1 className="text-white lg:text-2xl text-small mt-8">We create modern websites and visual identities that help businesses look sharp, build trust, and convert visitors into customers.</h1>
                    <a className="mt-8 px-4 inline-flex h-10 rounded-lg items-center justify-around transition duration-300 ease-in-out cursor-pointer bg-dark-spruce hover:bg-dark-spruce/60 text-white">
                        Get a Quote
                    </a>
                    <a className="inline-flex mt-8 ml-8 px-4 h-10 rounded-lg items-center justify-around transition duration-300 ease-in-out cursor-pointer bg-white/10 hover:bg-white/50 text-white border-dark-spruce/50 border">
                        Check out our testimonials
                    </a>
                </div>
                <div className="w-1/2 h-1/2 m-auto">
                    <img src="landingImage.jpg" className="rounded-4xl"></img>
                </div>
            </div>
        </>
    )
}