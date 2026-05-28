import "../styles.css";

export const Contact = () => {
    return(
        <div className="pt-2 pb-2 bg-background-secondary border-t-2 border-action-primary" id="contact">
            <div className="flex flex-row px-4 py-4">
                <div className="flex flex-col w-1/3 items-centered">
                    <div className="pb-2"><h1 className="text-white-main text-4xl">Abhinav Mishra</h1></div>
                    <div className="py-2"><p className="text-action-secondary text-2xl">Developer/ Learner/ Explorer/ Builder</p></div>
                    <div className="py-2"><div className="rounded-2xl border-2 border-white-main p-4 w-fit"><a className="flex items-center gap-3" href="mailto:abhinav714b@gmail.com"><img className="h-6 w-6 invert" src="https://www.svgrepo.com/show/305463/email-outline.svg" alt="email icon"/><p className="text-white-main hover:underline">abhinav714b@gmail.com</p></a></div></div>
                </div>
                <div className="w-2/3 px-2">
                    <h1 className="text-action-secondary text-3xl">// Find me on</h1>
                    <div className="flex flex-row">
                        <div className="pr-4"><div className="p-4 h-full w-full bg-background rounded-2xl border-2 border-action-primary"><a className="flex flex-col items-center" target="_blank" href="https://github.com/DrBig-Brain"><img className="p-2 invert h-1/2 w-1/2" src="https://simpleicons.org/icons/github.svg"></img><p className="text-action-primary text-xl">Github</p></a></div></div>
                        <div className="pl-4"><div className="p-4 h-full w-full bg-background rounded-2xl border-2 border-action-primary"><a className="flex flex-col items-center" target="_blank" href="https://www.linkedin.com/in/abhinavmishra05/"><img className="p-2 invert h-1/2 w-1/2" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-square-icon.svg"></img><p className="text-action-primary text-xl">Linkedin</p></a></div></div>
                        <div className="px-4"><div className="p-4 h-full w-full bg-background rounded-2xl border-2 border-action-primary"><a className="flex flex-col items-center" target="_blank" href="https://huggingface.co/DrBig-Brain"><img className="p-2 invert h-1/2 w-1/2" src="https://simpleicons.org/icons/huggingface.svg"></img><p className="text-action-primary text-xl">Huggingface</p></a></div></div>
                        <div className="px-4"><div className="p-4 h-full w-full bg-background rounded-2xl border-2 border-action-primary"><a className="flex flex-col items-center" target="_blank" href="https://www.kaggle.com/abhinav10101010"><img className="p-2 invert h-1/2 w-1/2" src="https://simpleicons.org/icons/kaggle.svg"></img><p className="text-action-primary text-xl">Kaggle</p></a></div></div>
                        <div className="px-4"><div className="p-4 h-full w-full bg-background rounded-2xl border-2 border-action-primary"><a className="flex flex-col items-center" target="_blank" href="https://leetcode.com/problemset/"><img className="p-2 invert h-1/2 w-1/2" src="https://simpleicons.org/icons/leetcode.svg"></img><p className="text-action-primary text-xl">Leetcode</p></a></div></div>
                    </div>
                </div>
            </div>
            <div className="px-20 py-4"><hr className=" px-10 border-action-secondary"></hr></div>
            <div className="flex justify-between items-baseline py-4 px-4">
                <div className="px-2"><p className="text-l text-action-secondary">© 2026 • <span className="text-action-primary">Abhinav Mishra</span> • Built with React • NIT Hamirpur <a href="https://github.com/DrBig-Brain/myPortfolio">scouce code</a> </p></div>
                <div className="rounded-2xl border-2 border-white-main"><a href="#about" className="p-2 text-2xl text-white-main">Back to the top!</a></div>
            </div>
        </div> 
    )
}