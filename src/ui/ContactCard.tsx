import { GithubIcon, LinkedInIcon, MailIcon } from "./Icon"
import { useLanguage } from '../lib/LanguageContext'
import { card } from '../lib/constants'

export default function ContactCard() {
	const { t } = useLanguage()
    const links = [
        { name: "Github", Icon: GithubIcon, href: "https://github.com/NawlFountains/" },
        { name: "LinkedIn", Icon: LinkedInIcon, href: "https://linkedin.com/in/nahuel-fuentes-423a35192/" },
    ]

    return (
        <div className={`flex flex-col items-center gap-8 py-20  ${ card.textBodyColor}`}>

            <p className="text-center max-w-md">
	    	{t.contact.reach_out}
            </p>

            <a            
                href="mailto:nahuelfuentes2001@gmail.com"
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-heading bg-gruv-fg1 hover:bg-gruv-orange hover:text-gruv-fg0 shadow-md shadow-gruv-bg0/40 transition-all duration-300`}>
                <MailIcon className="w-5 h-5" />
                nahuelfuentes2001@gmail.com
            </a>

            <div className="flex gap-6">
                {links.map(link => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-2 hover:text-gruv-orange text-gruv-fg0 transition-colors duration-300`}>
                        <link.Icon className="w-5 h-5" />
                        {link.name}
                    </a>
                ))}
            </div>

            <p className="text-gray-600 text-sm mt-8">
	    	{t.contact.location}
            </p>
        </div>
    )
}
