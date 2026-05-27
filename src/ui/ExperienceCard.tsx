import { CalendarIcon, MapPinIcon } from "./Icon";

export default function ExperienceCard() {

    return (
        <div className="text-white text grid grid-cols-1 lg:flex ">
            <div className='flex flex-col bg-dark-gray p-2 px-6 rounded-2xl mx-auto w-full my-2 lg:h-full gap-3' >
                <div className= 'text-lg font-bold'>
                    Reserch Intern
                </div>
                <div className="text-lg">
                    Universidad Nacional del Sur
                </div>
                <div className="flex-wrap">
                    Conducted state-of-the-art research in Artificial Intelligence, focusing on neural radiance fields (NeRFs),
                    Evaluated model performance with PSNR and SSIM, identifying limitations and suggesting architectural improvements.
                </div>
                <div className="flex text-md justify-between mt-auto">
                    <div className="flex gap-2">
                        <MapPinIcon/>
                        Buenos Aires, Argentina 
                    </div>
                    <div className="flex gap-2">
                        <CalendarIcon/>
                        2024 - 2025
                    </div>
                </div>
            </div>
        </div>
    )
}