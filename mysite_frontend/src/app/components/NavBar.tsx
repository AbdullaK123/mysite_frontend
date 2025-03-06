'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])


    return (
        <nav className="border-b-1 shadow-md text-white bg-black">
            <div className="container mx-auto flex justify-between items-center">
                <div className="m-4 text-xl font-bold">
                    StoryShare
                </div>
                <div className="m-4">
                    <ul className="hidden md:flex space-x-8">
                        <li >
                            <Link
                                href={"/"}
                                className="inline-block transform transition-all duration-300 ease-in-out hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="inline-block transform transition-all duration-300 ease-in-out hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                            >
                                My Stories
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/"}
                                className="inline-block transform transition-all duration-300 ease-in-out hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"    
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    className="md:hidden m-4"
                    onClick={toggleMenu}
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                    <div className="flex flex-col space-y-4 m-4">
                        <Link
                            href={"/"}
                            className="inline-block transform transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                        >
                            Home
                        </Link>
                        <Link
                            href={"/"}
                            className="inline-block transform transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                        >
                            My Stories
                        </Link>
                        <Link
                            href={"/"}
                            className="inline-block transform transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"    
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}

        </nav>
    )
}