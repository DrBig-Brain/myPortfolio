import "../styles.css";

export const Contact = () => {
    return(
        <div className="pt-2 pb-2 bg-background-secondary border-t-2 border-action-primary" id="contact">
            <div className="flex flex-col md:flex-row px-4 py-4">
                <div className="flex flex-col w-full md:w-1/3 items-start md:items-start mb-6 md:mb-0">
                    <div className="pb-2"><h1 className="text-white-main text-2xl md:text-4xl">Abhinav Mishra</h1></div>
                    <div className="py-2"><p className="text-action-secondary text-lg md:text-2xl">Developer/ Learner/ Explorer/ Builder</p></div>
                    <div className="py-2"><div className="rounded-2xl border-2 border-white-main p-3 w-fit"><a className="flex items-center gap-3" href="mailto:abhinav714b@gmail.com" target = "_blank" rel="noreferrer"><img className="h-5 w-5 invert" src="https://www.svgrepo.com/show/305463/email-outline.svg" alt="email icon"/><p className="text-white-main hover:underline">abhinav714b@gmail.com</p></a></div></div>
                </div>
                <div className="w-full md:w-2/3 px-0 md:px-2">
                    <h1 className="text-action-secondary text-2xl md:text-3xl">// Find me on</h1>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="w-full sm:w-1/2 md:w-1/3 pr-2"><div className="p-4 h-full w-full bg-background rounded-2xl border-2 border-action-primary hover:border-white-main"><a className="flex flex-col items-center" target="_blank" rel="noreferrer" href="https://github.com/DrBig-Brain"><img className="p-2 invert h-8 w-8" src="https://simpleicons.org/icons/github.svg" alt="github"/><p className="text-action-primary text-lg">Github</p></a></div></div>
                        <div className="w-full sm:w-1/2 md:w-1/3 pr-2"><div className="p-4 h-full w-full bg-background rounded-2xl border-2 border-action-primary hover:border-white-main"><a className="flex flex-col items-center" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abhinavmishra05/"><img className="p-2 invert h-8 w-8" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-square-icon.svg" alt="linkedin"/><p className="text-action-primary text-lg">Linkedin</p></a></div></div>
                        <div className="w-full sm:w-1/2 md:w-1/3 pr-2"><div className="p-4 h-full w-full bg-background rounded-2xl border-2 border-action-primary hover:border-white-main"><a className="flex flex-col items-center" target="_blank" rel="noreferrer" href="https://huggingface.co/DrBig-Brain"><img className="p-2 invert h-8 w-8" src="https://simpleicons.org/icons/huggingface.svg" alt="huggingface"/><p className="text-action-primary text-lg">Huggingface</p></a></div></div>
                        <div className="w-full sm:w-1/2 md:w-1/3 pr-2"><div className="p-4 h-full w-full bg-background rounded-2xl border-2 border-action-primary hover:border-white-main"><a className="flex flex-col items-center" target="_blank" rel="noreferrer" href="https://www.kaggle.com/abhinav10101010"><img className="p-2 invert h-8 w-8" src="https://simpleicons.org/icons/kaggle.svg" alt="kaggle"/><p className="text-action-primary text-lg">Kaggle</p></a></div></div>
                        <div className="w-full sm:w-1/2 md:w-1/3 pr-2"><div className="p-4 h-full w-full bg-background rounded-2xl border-2 border-action-primary hover:border-white-main"><a className="flex flex-col items-center" target="_blank" rel="noreferrer" href="https://leetcode.com/problemset/"><img className="p-2 invert h-8 w-8" src="https://simpleicons.org/icons/leetcode.svg" alt="leetcode"/><p className="text-action-primary text-lg">Leetcode</p></a></div></div>
                    </div>
                </div>
            </div>
            <div className="px-20 py-4"><hr className=" px-10 border-action-secondary"></hr></div>
            <div className="flex justify-between items-baseline py-4 px-4">
                <div className="px-2"><p className="text-l text-action-secondary">© 2026 • <span className="text-action-primary">Abhinav Mishra</span> • Built with React • NIT Hamirpur <a className="underline" href="https://github.com/DrBig-Brain/myPortfolio">source code</a> </p></div>
                <div className="rounded-2xl border-2 border-white-main"><a href="#about" className="p-2 text-2xl text-white-main">Back to the top!</a></div>
            </div>
        </div> 
    )
}