export type Project = {
    name: string
    description: string
    stack: string[]
    repo_link: string
    live_demo_link: string | null
    icon_path: string 
    showcase_video_path: string
}

export type Education = {
    title: string
    institution_name: string
    description: string
    place: string
    time: string
}

export type Experience = {
    title: string
    company_name: string
    description: string
    place: string
    time: string
}

export type Stack = {
    discipline: string
    tools: string[]
}
