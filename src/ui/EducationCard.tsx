import { Education } from "../definitions";
import { CalendarIcon, MapPinIcon } from "./Icon";

interface EducationCardProps {
    education: Education
}

export default function EducationCard( props: EducationCardProps) {

    return (
        <div className='flex flex-col bg-dark-gray p-2 px-6 rounded-2xl mx-auto w-full my-2 lg:h-full gap-3' >
            <div className= 'text-lg font-bold'>
                {props.education.title}
            </div>
            <div className="text-lg">
                {props.education.institution_name}
                </div>
            <div className="flex-wrap my-auto">
                {props.education.description}
            </div>
            <div className="flex text-md justify-between mt-auto">
                <div className="flex gap-2">
                    <MapPinIcon/>
                    {props.education.place}
                </div>
                <div className="flex gap-2">
                    <CalendarIcon/>
                    {props.education.time}
                </div>
            </div>
        </div>
)
}