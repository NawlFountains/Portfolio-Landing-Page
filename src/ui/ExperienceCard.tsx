import { gradients } from "../lib/constants";
import { CalendarIcon, InstitutionIcon, MapPinIcon } from "./Icon";
import { Experience } from '../lib/definitions'

interface ExperienceCardProps {
	experience: Experience
}
export default function ExperienceCard( props : ExperienceCardProps) {

    return (
            <div className={`text-white text grid grid-cols-1 lg:flex p-[1px] my-2 rounded-2xl ${gradients.border} shadow-lg shadow-purple-900/80`}>
                <div className='flex flex-col bg-dark-gray py-4 px-6 rounded-2xl mx-auto w-full lg:h-full gap-3' >
                    <div className= 'text-lg font-bold'>
			{props.experience.title}
                    </div>
                    <div className="text-lg flex gap-2">
                        <InstitutionIcon/> {props.experience.company_name} 
                    </div>
                    <div className="w-16 h-[1px] bg-purple-500/40"/>
                    <div className="flex-wrap">
		    	{props.experience.description}
                    </div>
                    <div className="flex text-md justify-between mt-auto">
                        <div className="flex gap-2">
                            <MapPinIcon/>
			    {props.experience.place}
                        </div>
                        <div className="flex gap-2">
                            <CalendarIcon/>
			    {props.experience.time}
                        </div>
                    </div>
                </div>
            </div>
    )
}
