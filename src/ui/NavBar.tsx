import { gradients, card } from "../lib/constants"
import { useState, useEffect } from "react"
import { CrossIcon, HamburgerIcon } from "./Icon"
import { useLanguage } from '../lib/LanguageContext'

export default function Navbar() {

    const [isAtTop, setIsAtTop] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const { t, language, toggle } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navbarSections = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.experience, href: '#experience'},
        { name: t.nav.education, href: '#education' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.stack, href: '#stack' },
        { name: t.nav.contact, href: '#contact' }
    ]

    return (
        <nav className="sticky sm:fixed top-0 left-0 right-0 z-50">
            <div className={`md:w-full lg:w-2/3 mx-auto py-1 lg:rounded-full ${isAtTop ? `lg:border border-b border-gruv-fg3 bg-gruv-fg1` : 'backdrop-blur'}`}>
                
                {/* Desktop menu */}
                <div className={`hidden lg:flex items-center justify-between gap-5 ${card.textHeaderColor}`}>
			<div className='flex gap-5 mx-auto'>
                    {navbarSections.map(section => (
                        <a key={section.name} href={section.href} className={`text-md rounded-full text-center p-3 px-5 my-1 ${gradients.hover}`}>
                            <div className="font-bold font-heading uppercase">
                                {section.name}
                            </div>
                        </a>
                    ))}
			<button onClick={toggle} 
			className={`text-md text-center p-3 px-5 my-1 font-bold font-heading uppercase rounded-xl hover:text-gruv-orange ${card.textBodyColor}`}>
			    {language === "en" ? "EN" : "ES"}
			</button>
			</div>
                </div>

                {/* Mobile menu */}
                <div className="lg:hidden flex items-center justify-between px-5 py-3">
                    <span className={`font-heading font-bold uppercase ${gradients.subtitle}`}>Nahuel</span>	
		    <div className={`items-center flex gap-5 ${card.textBodyColor}`}>
			<button onClick={toggle} className='font-bold'>
			    {language === "en" ? "EN" : "ES"}
			</button>
			    <button onClick={() => setIsOpen(!isOpen)} className={`${card.textHeaderColor}`}>
				{isOpen ? (
				    <CrossIcon/>
				) : (
				    <HamburgerIcon/>
				)}
			    </button>	
		</div>
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
