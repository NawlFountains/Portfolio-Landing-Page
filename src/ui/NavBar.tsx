export default function Navbar() {
    const navbarSections = [
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#projects' },
        { name: 'Stack', href:'#stack' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="backdrop-blur md:w-full lg:w-2/3 border border-gray-600 mx-auto mt-2 lg:rounded-full flex gap-5">
                {navbarSections.map(section => (
                    <a key={section.name} href={section.href} className="text-lg rounded-full hover:bg-opacity-20 bg-opacity-0 bg-white text-white text-center p-3 px-5 my-2 mx-auto">
                        <div className="font-bold justify-center mx-auto">
                                {section.name}
                        </div>
                    </a>
                ))}
            </div>
        </nav>
    )
}