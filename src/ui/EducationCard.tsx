import { gradients } from "../lib/constants";
import { Education } from "../lib/definitions";
import { CalendarIcon, InstitutionIcon, MapPinIcon } from "./Icon";

interface EducationCardProps {
    education: Education
}

export default function EducationCard( props: EducationCardProps) {

    return (
        <div className={`p-[1px] rounded-2xl ${gradients.border} my-1`}>
            <div className='flex flex-col rounded-2xl bg-dark-gray px-6 mx-auto py-4 w-full lg:h-full gap-3' >
                <div className= 'text-lg font-bold'>
                    {props.education.title}
                </div>
                <div className="text-lg flex gap-2">
                    <InstitutionIcon/>  {props.education.institution_name}
                </div>
            <div className="w-16 h-[1px] bg-purple-500/40"/>
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
        </div>
)
}