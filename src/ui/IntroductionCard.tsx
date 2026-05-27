import { gradients } from "../lib/constants"
import { GithubIcon, LinkedInIcon, MailIcon } from "./Icon"

export default function IntroductionCard() {
    const contactLink = [
            { name:'Github', Icon: GithubIcon ,href:'https://github.com/NawlFountains/'},
            { name:'LinkedIn', Icon: LinkedInIcon, href:'https://linkedin.com/in/nahuel-fuentes-423a35192/'},
            { name:'Mail', Icon: MailIcon, href:'mailto:nahuelfuentes2001@gmail.com'}
    ]    

    return (
         <div className='flex flex-col text-2xl m-10 rounded-2xl w-2/3 lg:w-2/5 mx-auto gap-10'>
            <div className="text-center">
                Hi, I'm Nahuel
            </div>
            <div className='text-center'>
                I'm a Computer Scientist that build intelligent systems. From neural radiance fields to RAG pipelines — I work across the full stack of modern AI and software engineering.
            </div>
            <div className="flex flex-col gap-2 lg:flex-row lg:gap-5 text-center">
                {contactLink.map( link => (
                    <a key={link.name} href={link.href} className={`flex flex-1 text-center py-2 rounded-full items-center justify-center gap-2 ${gradients.hover}`}>
                        <link.Icon className=''/> 
                        <div>
                            {link.name}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}