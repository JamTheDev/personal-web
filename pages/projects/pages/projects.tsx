import ProjectCard, { ProjectCardBg, ProjectCardBody } from "@/components/projects/project-card";
import { NextPage } from "next";

const Projects: NextPage = () => {
    return (
        <>
            <div className="pt-12 flex flex-col justify-center items-center header">
                <span className="p-5 font-bold text-4xl">Projects</span>
                <span className="text-stone-500 italic">This is the fruit of my labor.</span>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-8">
                {
                    Array.from({ length: 6 }).map((v, index) =>
                        <ProjectCard className="col-span-1" key={index}>
                            <ProjectCardBg />
                            <ProjectCardBody>
                                <span className="font-oswald font-bold text-3xl">Project Name</span>
                                <span className="font-serrat p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nemo reiciendis, consequatur adipisci quas quisquam quia dolore aperiam odio autem corporis assumenda deleniti, reprehenderit earum maxime sapiente dolor! Voluptatem, id!</span>
                                <span className="p-2 text-center">Visit [site-link, site-repo]</span>
                            </ProjectCardBody>
                        </ProjectCard>
                    )
                }
            </div>
        </>
    )
}

export default Projects;