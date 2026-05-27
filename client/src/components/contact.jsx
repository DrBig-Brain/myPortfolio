import "../styles.css";

export const Contact = () => {
    return(
        <div className="pt-2 pb-2 bg-background-secondary border-t-2 border-action-primary">
            <div className="flex flex-col items-center">
                <div className="text-action-primary">
                    <h3 className="text-5xl text-center font-bold">Abhinav Mishra</h3>
                    <p className="text-3xl text-center">Developer/Learner/Explorer/Thinker/Builder</p>
                </div>
                <p className="text-5xl text-action-primary font-bold pt-4">Socials</p>
                <div className="pt-6 flex flex-row text-white-main">
                    <a className="px-20 flex flex-col items-center hover:-translate-y-2 transition-all duration-300" href = "https://github.com/DrBig-Brain" target="_blank">
                        <img className="pb-4 h-[50px] w-[50px] invert" src="https://simpleicons.org/icons/github.svg"></img>
                        <p>Github</p>
                    </a>
                    <a className="px-20 flex flex-col items-center hover:-translate-y-2 transition-all duration-300" href = "https://www.linkedin.com/in/abhinavmishra05/" target="_blank">
                        <img className="pb-4 h-[50px] w-[50px] invert" src="https://cdn-icons-png.flaticon.com/128/49/49656.png"></img>
                        <p>Linkedin</p>
                    </a>
                    <a className="px-20 flex flex-col items-center hover:-translate-y-2 transition-all duration-300" href = "https://leetcode.com/u/DrBig-Brain/" target="_blank">
                        <img className="pb-4 px-2 h-[50px] w-[50px] invert" src="https://simpleicons.org/icons/leetcode.svg"></img>
                        <p>Leetcode</p>
                    </a>
                    <a className="px-20 flex flex-col items-center hover:-translate-y-2 transition-all duration-300" href = "https://www.kaggle.com/abhinav10101010"  target="_blank">
                        <img className="pb h-[50px] w-[50px] invert" src="https://simpleicons.org/icons/kaggle.svg"></img>
                        <p>Kaggle</p>
                    </a>
                    <a className="px-20 flex flex-col items-center hover:-translate-y-2 transition-all duration-300" href = "https://huggingface.co/DrBig-Brain" target="_blank">
                        <img className="pb-4 h-[50px] w-[50px] invert" src="https://simpleicons.org/icons/huggingface.svg"></img>
                        <p>HuggingFace</p>
                    </a>
                </div>
                <p className="text-5xl pt-4 text-action-primary font-bold">Or Reach Out</p>
                <div className="pt-4 flex flex-row text-white-main text-3xl">
                    <a className="flex flex-row items-center gap-2 hover:-translate-y-2 transition-all duration-300" href="mailto:abhinav714b@gamil.com">
                        <img className="h-[32px] w-[32px] invert pr-2" src="https://simpleicons.org/icons/gmail.svg"></img>
                        <p className="text-2xl">Mail me</p>
                    </a>
                    <p className="px-6 text-action-primary">OR</p>
                    <div className="flex flex-row items-center gap-2 hover:-translate-y-2 transition-all duration-300">
                        <img className="h-[32px] w-[32px] invert pr-2" src="https://cdn-icons-png.flaticon.com/128/597/597177.png"></img>
                        <p className="text-2xl">+91-7807952061</p>
                    </div>
                </div>

            </div>

        </div>
    )
}