import { gradients } from "../lib/constants"
import { Stack } from "../lib/definitions"

interface StackCardProps {
    stack: Stack
}

export default function StackCard( props: StackCardProps) {
    return (
        <div className={`p-[2px] rounded-2xl ${gradients.border}`}>
            <div className="rounded-2xl flex flex-col bg-dark-gray p-5 h-full">
                <div className={`font-bold ${gradients.subtitle}`}>
                    {props.stack.discipline}
                </div>
                <div className="flex flex-row flex-wrap gap-2">
                    {props.stack.tools.map( tool => (
                        <div className="p-2 rounded-2xl text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}