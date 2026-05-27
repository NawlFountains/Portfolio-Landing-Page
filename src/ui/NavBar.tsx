import { gradients } from "../lib/constants"
import { useState, useEffect } from "react"

export default function Navbar() {

    const [isAtTop, setIsAtTop] = useState(true)

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
        { name: 'Stack', href:'#stack' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
                <div className={`backdrop-blur md:w-full lg:w-2/3 mx-auto mt-1 lg:rounded-full flex gap-5 ${isAtTop ? 'lg:border border-b border-purple-500/80' : ''}`}>
                    {navbarSections.map(section => (
                        <a key={section.name} href={section.href} className={`text-md rounded-full text-center p-3 px-5 my-1 mx-auto ${gradients.hover}`}>
                            <div className="font-bold font-heading uppercase justify-center mx-auto">
                                    {section.name}
                            </div>
                        </a>
                    ))}

                </div>
        </nav>
    )
}