import { GithubIcon, LinkedInIcon, MailIcon } from "./Icon"

export default function IntroductionCard() {
    const contactLink = [
        { name:'Github', Icon: GithubIcon ,href:'https://github.com/NawlFountains/'},
        { name:'LinkedIn', Icon: LinkedInIcon, href:'https://linkedin.com/in/nahuel-fuentes-423a35192/'},
        { name:'Mail', Icon: MailIcon, href:'mailto:nahuelfuentes2001@gmail.com'}
    ]

    return (
         <div id='about' className='bg-black border text-white text-2xl p-20 rounded-2xl my-5' >
            <div className='text-center'>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
            </div>
            <div className="flex gap-2 text-center mx-20 mt-5">
                {contactLink.map( link => (
                    <a key={link.name} href={link.href} className='flex flex-1 text-center py-2 hover:bg-opacity-30 rounded-full bg-opacity-0 bg-white items-center justify-center gap-2'>
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