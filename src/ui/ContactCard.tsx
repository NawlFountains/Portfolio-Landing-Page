import { GithubIcon, LinkedInIcon, MailIcon } from "./Icon"

export default function ContactCard() {
    const links = [
        { name: "Github", Icon: GithubIcon, href: "https://github.com/NawlFountains/" },
        { name: "LinkedIn", Icon: LinkedInIcon, href: "https://linkedin.com/in/nahuel-fuentes-423a35192/" },
    ]

    return (
        <div className="flex flex-col items-center gap-8 py-20">

            <p className="text-gray-400 text-center max-w-md">
                Have a project in mind or just want to connect? Feel free to reach out.
            </p>

            <a            
                href="mailto:nahuelfuentes2001@gmail.com"
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-heading hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300"
            >
                <MailIcon className="w-5 h-5" />
                nahuelfuentes2001@gmail.com
            </a>

            <div className="flex gap-6">
                {links.map(link => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        <link.Icon className="w-5 h-5" />
                        {link.name}
                    </a>
                ))}
            </div>

            <p className="text-gray-600 text-sm mt-8">
                Buenos Aires, Argentina
            </p>
        </div>
    )
}
