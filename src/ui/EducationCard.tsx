import { gradients, card} from "../lib/constants";
import { Education } from "../lib/definitions";
import { CalendarIcon, InstitutionIcon, MapPinIcon } from "./Icon";

interface EducationCardProps {
    education: Education
}

export default function EducationCard( props: EducationCardProps) {

    return (
        <div className={`p-[1px] rounded-2xl ${gradients.border} my-1 ${card.shadow}`}>
            <div className={`flex flex-col rounded-2xl ${card.background} ${card.textBodyColor} px-6 mx-auto py-4 w-full lg:h-full gap-3`} >
                <div className= {`text-lg font-bold ${card.textHeaderColor}`}>
                    {props.education.title}
                </div>
                <div className= {`text-lg flex gap-2 ${card.textHeaderColor}`}>
                    <InstitutionIcon/>  {props.education.institution_name}
                </div>
            <div className="w-16 h-[1px] bg-gruv-gray/40"/>
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
