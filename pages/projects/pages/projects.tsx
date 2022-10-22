import Fetch from "@/components/layouts/default/Fetch";
import { ProjectSection } from "@/components/layouts/default/projects/project-card";
import { NextPage } from "next";
import { createContext } from "react";

/**
 * 
 * @returns React.ReactNode
 */

const context = createContext("a");

const Projects: NextPage = () => {

    const pollRequest = () => {

    }

    return (
        <>
            <Fetch
                waitingFallback={
                    <span>Loading...</span>
                }
                urls={[{
                    urlName: "Projects",
                    endpoint: "https://jam-portfolio-cms-production.up.railway.app/api/project-details?populate=*"
                }]}>
                {
                    (d: Map<string, any>) =>
                        <>
                            {
                                // d.get("Projects")["data"]["data"].map((val: any, index: number) => <> {val["attributes"]["projectName"]}  </>)
                            }

                            <div className="p-12">
                                <div className="flex flex-col gap-3">
                                    <span className="font-oswald font-bold text-4xl">PROJECTS</span>
                                    <span className="font-serrat text-stone-500">These are the projects I have made throughout my journey.</span>
                                </div>

                                
                               <ProjectSection>
                                    <ProjectSection.Card>
                                        <ProjectSection.Header>
                                            <span className="text-3xl font-bold font-oswald">{"Hello".toUpperCase()}</span>
                                            <span className="text-sm">This is a simple card that explains the title.</span>
                                        </ProjectSection.Header>

                                        <ProjectSection.Body>
                                            
                                        </ProjectSection.Body>
                                    </ProjectSection.Card>
                               </ProjectSection>
                                
                            </div>
                        </>
                }
            </Fetch>
        </>
    )
}

export default Projects;