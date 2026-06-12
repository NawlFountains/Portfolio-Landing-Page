import { Project } from "../lib/definitions";
import { gradients, card, stack } from '../lib/constants'
import { ExternalLinkIcon, GithubIcon } from "./Icon";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard( props : ProjectCardProps) {
    return (
        <div className={`p-[1px] rounded-xl ${gradients.border} shadow-lg shadow-gruv-bg0`}>
            <div className={`flex flex-col rounded-xl ${card.textBodyColor} ${card.background} p-3 gap-4 px-6 h-full`}>
                <div className="flex flex-row border-b border-gruv-gray items-center gap-2">
                    {props.project.icon_path && (
                    <img 
                        className="h-8 w-8"
                        src={`${process.env.PUBLIC_URL}${props.project.icon_path}`} 
                        alt={`icon ${props.project.name}`}/>
                    )}
                    <h1 className={`text-2xl font-bold my-2 py-2 ${gradients.subtitle}`}>{props.project.name}</h1>
                </div>
                <p className="">{props.project.description}</p>
                <img 
                    className="rounded-xl w-full aspect-video object-cover rounded-lg"
                    src={`${process.env.PUBLIC_URL}${props.project.showcase_video_path}`} 
                    alt={`demo ${props.project.name}`}/>
                <div className="flex flex-wrap gap-2 items-center mt-auto">
                    {props.project.stack.map( tool => (
                        <p className={`p-2 py-1 rounded-full text-sm text-center ${stack.background} ${stack.textColor}`}>{tool}</p>
                    ))}
                </div>
                <div className="flex flex-wrap gap-5 mt-auto">
                    <div className="flex gap-2">
                        <a href={props.project.repo_link} className={`flex rounded-full p-2 gap-2 ${gradients.hover}`}>
                            <GithubIcon/>
                            Source
                            </a>
                    </div>
                    <div className='flex gap-2'>
                        {props.project.live_demo_link && (
                            <a href={props.project.live_demo_link} className={`flex rounded-full p-2 gap-2 ${gradients.hover}`}>
                                <ExternalLinkIcon/>
                                Live Demo
                                </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
