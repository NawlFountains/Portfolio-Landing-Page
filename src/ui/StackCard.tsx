import { gradients } from "../lib/constants"
import { Stack } from "../lib/definitions"

interface StackCardProps {
    stack: Stack
}

export default function StackCard( props: StackCardProps) {
    return (
         <div className={`p-[2px] rounded-2xl ${gradients.border} shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300`}>
            <div className="rounded-2xl flex flex-col gap-3 bg-dark-gray p-5 h-full">
                <div className={`font-heading font-bold text-xl ${gradients.subtitle}`}>
                    {props.stack.discipline}
                </div>
                <div className="w-8 h-[1px] bg-purple-500/40"/>
                <div className="flex flex-wrap gap-2">
                    {props.stack.tools.map(tool => (
                        <div key={tool} className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-100 hover:bg-purple-500/20 transition-colors duration-200">
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}