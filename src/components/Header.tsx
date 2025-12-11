import { useState } from 'react';
import {Dialog, DialogPanel} from '@headlessui/react';

const links = [
    {text: "Services", quote: false},
    {text: "Portfolio", quote: false},
    {text: "Testimonials", quote: false},
    {text: "Why Design Matters", quote: false},
    {text: "Contact", quote: false},
    {text: "Get A Quote", quote: true}
]

export default function Header(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return(
        <header className="fixed z-10 top-0 backdrop-blur-3xl w-full">
            <nav className={`flex justify-items-start gap-2 items-center p-6 transition duration-300 ease-in-out border-b ${mobileMenuOpen ?  'border-dark-spruce/0' : 'border-dark-spruce/50 '}`}>
                <div className="flex rounded-lg items-center transition duration-300 ease-in-out cursor-pointer bg-white/10 hover:bg-white/50 h-10 w-10">
                    <a href="#" className="w-full h-full p-2 object-contain">
                        <img src="favicon.png"></img>
                    </a>
                </div>
                <div className="lg:hidden ml-auto">
                    <button 
                        type="button" 
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={()=> setMobileMenuOpen(true)}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" data-slot="icon" aria-hidden="true" className="size-6">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                {links.map((link) =>
                    <a key={link.text} className={`hidden lg:flex h-10 px-4 rounded-lg items-center justify-around transition duration-300 ease-in-out cursor-pointer ${link.quote ? 'bg-dark-spruce hover:bg-dark-spruce/60 text-white ml-auto' : 'bg-white/10 hover:bg-white/50 text-white '}`}>
                        {link.text}
                    </a>
                )}
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50"/>
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-onyx sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div className="flex p-6">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-md p-2.5 text-white inline-flex justify-end ml-auto items-center -m-2.5"
                            >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-8">
                                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    {links.map((link) =>
                        <a key={link.text} className={`flex h-10 px-4 rounded-lg items-center justify-start transition duration-300 ease-in-out cursor-pointer my-5 text-white`}>
                            {link.text}
                        </a>
                    )}
                </DialogPanel>
            </Dialog>
        </header>
    )
}