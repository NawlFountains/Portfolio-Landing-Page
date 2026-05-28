import { gradients } from "../lib/constants"
import { useState, useEffect } from "react"
import { CrossIcon, HamburgerIcon } from "./Icon"

export default function Navbar() {

    const [isAtTop, setIsAtTop] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navbarSections = [
        { name: 'About', href: '#about' },
        { name: 'Experience' , href: '#experience'},
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#projects' },
        { name: 'Stack', href: '#stack' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <nav className="sticky sm:fixed top-0 left-0 right-0 z-50">
            <div className={`backdrop-blur md:w-full lg:w-2/3 mx-auto mt-1 lg:rounded-full ${isAtTop ? 'lg:border border-b border-purple-500/80' : ''}`}>
                
                {/* Desktop menu */}
                <div className="hidden lg:flex gap-5">
                    {navbarSections.map(section => (
                        <a key={section.name} href={section.href} className={`text-md rounded-full text-center p-3 px-5 my-1 mx-auto ${gradients.hover}`}>
                            <div className="font-bold font-heading uppercase">
                                {section.name}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Mobile menu */}
                <div className="lg:hidden flex items-center justify-between px-5 py-3">
                    <span className={`font-heading font-bold uppercase ${gradients.subtitle}`}>Nahuel</span>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? (
                            <CrossIcon/>
                        ) : (
                            <HamburgerIcon/>
                        )}
                    </button>
                </div>

                {isOpen && (
                    <div className="lg:hidden flex flex-col pb-3 px-5 gap-1">
                        {navbarSections.map(section => (
                            <a
                                key={section.name}
                                href={section.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-md rounded-full text-center p-3 font-bold font-heading uppercase ${gradients.hover}`}
                            >
                                {section.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}