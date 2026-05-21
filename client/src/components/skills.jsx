import "../styles.css";
import { skills } from "../data/skills"

export const Skills = () => {
    return (
        <>
            <div id="skills">

                <p className="text-action-primary bold text-7xl text-center hover:underline pt-4">skills</p>
                <div className="flex flex-wrap justify-center item-strech p-10">
                    {
                        skills.map((block) => {
                            return (
                                <div className="p-6 w-1/3 flex">
                                    <div className="rounded-3xl border-l-4 border-action-primary bg-background-secondary w-full h-full flex flex-col p-8">
                                        <div className="flex items-center gap-3 text-action-primary mb-8">
                                            <h2 className="text-3xl font-bold hover:underline hover:text-action-secondary ">{block.heading}</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-4">
                                            {block.content.map((item) => {
                                                return (
                                                    <span className="px-5 py-2 font-bold rounded-full border-2 border-action-secondary text-action-secondary text-xl bg-white/5 backdrop-blur-sm shadow-md hover:border-action-primary hover:text-action-primary" > {item}</span>
                                                    /*<img src={`https://simpleicons.org/icons/${item.toLowerCase().replaceAll(' ', '')}.svg`} className="px-5 py-2 h-[100px] w-[100px] font-bold rounded-full border-2 border-action-secondary text-action-secondary text-xl bg-white/5 backdrop-blur-sm shadow-md hover:border-action-primary hover:text-action-primary"></img>*/
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div >
            </div>
        </>
    )
}