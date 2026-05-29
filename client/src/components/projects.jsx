import "../styles.css";
import {projects} from "../data/projects";

export const Projects = () => {
    return(
        <div className="text-center scroll-mt-28 px-4" id="projects">
            <h1 className="text-action-primary text-4xl sm:text-7xl hover:underline py-6 sm:py-8 hover:-translate-y-2 transition-all duration-300">
                projects
            </h1>
            <div className="flex flex-wrap items-stretch pb-12 -mx-4">
                {projects.map((project, index) => {
                return (
                    <div key={index} className="w-full sm:w-1/2 p-4">
                    <div className="rounded-3xl overflow-hidden border border-action-primary/40 bg-background-secondary h-full flex flex-col hover:-translate-y-2 transition-all duration-300">

                        {/* Top Image Section */}
                        <div className="h-40 sm:h-52 flex items-center justify-center border-b border-action-primary/20 bg-gradient-to-br from-background-secondary to-black/40">
                        <img
                            src={`/public/images/${project.image}`}
                            alt={project.title}
                            className="h-full w-full object-cover opacity-90"
                        />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow p-4 sm:p-6 text-left">
                        <h1 className="text-action-primary text-2xl sm:text-3xl hover:underline pb-2 sm:pb-3 font-semibold">
                            {project.title}
                        </h1>

                        <p className="text-action-secondary text-base sm:text-lg leading-relaxed flex-grow">
                            {project.description}
                        </p>

                        {/* Footer Button */}
                        <div className="pt-4 sm:pt-6">
                            <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 rounded-xl border border-action-primary text-action-primary hover:bg-action-primary hover:text-black transition-all duration-300"
                            >
                            GitHub
                            </a>
                        </div>
                        </div>

                    </div>
                    </div>
                );
                })}
            </div>
        </div>
    )
}