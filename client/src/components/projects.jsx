import "../styles.css";
import {projects} from "../data/projects";

export const Projects = () => {
    return(
        <div className="text-center" id="projects">
        <h1 className="text-pink-400 text-3xl">Projects</h1>
        {projects.map((project)=>{
            return <div className = "">
                <h1 className="text-emerald-600 underline">{project.title}</h1>
                <p className="text-emerald-600">{project.description}</p>
                <a href={project.github} className="text-gray-300">Github</a>
            </div>
        })}
        </div>
    )
}