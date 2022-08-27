import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

type ProjectCardAttributes = {
    children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

type ProjectCardBodyAttributes = ProjectCardAttributes


const ProjectCard: FunctionComponent<ProjectCardAttributes> = (props) => {
    return (
        <>
            <div className={
                `
                rounded-md
                relative 
                border-stone-300
                border-2 border-solid
                ${props.className}
                `
            }>
                {props.children}
            </div>
        </>
    );
}

export const ProjectCardBg: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div {...props} className={`
        absolute
        w-full
        h-full
        rounded-md
        -z-10

        bg-stone-300
        ${props.className}
        `}>

        </div>
    );
}

export const ProjectCardBody: FunctionComponent<ProjectCardBodyAttributes> = (props) => {
    return (
        <div className="p-2 z-20 flex flex-col">
            {props.children}
        </div>
    )
}

export default ProjectCard;