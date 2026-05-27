import { Project } from "../lib/definitions";
import { gradients } from '../lib/constants'
import { GithubIcon } from "./Icon";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard( props : ProjectCardProps) {
    return (
        <div className={`p-[1px] rounded-xl ${gradients.border}`}>
            <div className="flex flex-col text-white rounded-xl bg-dark-gray hover:bg-gradient-to-r from-dark-gray via-dark-gray to-purple-900  p-3 gap-4 px-6 h-full">
                <h1 className={`text-2xl font-bold my-2 py-2 border-b ${gradients.subtitle}`}>{props.project.name}</h1>
                <p className="">{props.project.description}</p>
                <div className="flex flex-wrap gap-2 items-center mt-auto">
                    {props.project.stack.map( tool => (
                        <p className="p-2 py-1 rounded-full text-sm text-center bg-gradient-to-r from-gray-700 to-gray-800">{tool}</p>
                    ))}
                </div>
                <div className="flex flex-wrap gap-5 mt-auto">
                    <div className="flex gap-2">
                        <a href={props.project.repo_link} className={`flex rounded-full p-2 gap-2 ${gradients.hover}`}>
                            <GithubIcon/>
                            Source
                            </a>
                    </div>
                    <div className={`rounded-full p-2 ${gradients.hover}`}>
                        <a href={props.project.live_demo_link}>Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}