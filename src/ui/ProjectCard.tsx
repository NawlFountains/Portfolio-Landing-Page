import { Project } from "../definitions";
import { GithubIcon } from "./Icon";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard( props : ProjectCardProps) {
    return (
        <div className="flex flex-col text-white rounded-xl bg-dark-gray hover:border-l-4 hover:border-b-4 border-gray-300  p-3 gap-4 px-6">
            <h1 className="text-2xl font-bold my-2 py-2 border-b">{props.project.name}</h1>
            <p className="">{props.project.description}</p>
            <div className="flex flex-wrap gap-2 items-center mt-auto">
                {props.project.stack.map( tool => (
                    <p className="px-2 py-1 rounded-full border border-white text-sm text-center bg-white bg-opacity-10">{tool}</p>
                ))}
            </div>
            <div className="flex flex-wrap gap-5 mt-auto">
                <div className="flex gap-2">
                    <a href={props.project.repo_link} className="flex gap-2">
                        <GithubIcon/>
                        Source
                        </a>
                </div>
                <div>
                    <a href={props.project.live_demo_link}>Live Demo</a>
                </div>
            </div>
        </div>
    )
}