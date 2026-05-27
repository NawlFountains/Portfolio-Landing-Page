import { Project } from "../definitions";
import { GithubIcon } from "./Icon";

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard( props : ProjectCardProps) {
    return (
        <div className="text-white">
            <h1>{props.project.name}</h1>
            <p>{props.project.description}</p>
            <div className="flex gap-2">
                {props.project.stack.map( tool => (
                    <p>{tool}</p>
                ))}
            </div>
            <div className="flex gap-2">
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