import { gradients, card, stack } from "../lib/constants"
import { Stack } from "../lib/definitions"

interface StackCardProps {
    stack: Stack
}

export default function StackCard( props: StackCardProps) {
    return (
         <div className={`p-[2px] rounded-2xl ${gradients.border} ${card.shadow}`}>
            <div className={`rounded-2xl flex flex-col gap-3 ${card.background} p-5 h-full`}>
                <div className={`font-heading font-bold text-xl ${gradients.subtitle}`}>
                    {props.stack.discipline}
                </div>
                <div className="w-8 h-[1px] bg-gruv-orange/40"/>
                <div className="flex flex-wrap gap-2">
                    {props.stack.tools.map(tool => (
                        <div key={tool} className={`px-3 py-1 rounded-full text-sm ${stack.border} ${stack.background} ${stack.textColor} transition-colors duration-200`}>
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
