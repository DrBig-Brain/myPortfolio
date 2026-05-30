import "../styles.css";

export const About = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-stretch scroll-mt-28" id="about">
                <div className="w-full md:w-1/2">
                    <img className="w-full h-auto object-cover" src="/images/ME.png" alt="Abhinav" />
                </div>
                <div className="flex flex-col w-full md:w-1/2 justify-center p-6 md:p-10">
                    <h1 className="font-bold text-2xl md:text-5xl text-white-main hover:underline hover:-translate-y-2 transition-all duration-500">Hi, I am Abhinav Mishra</h1>
                    <h2 className="text-xl md:text-5xl text-action-primary hover:underline hover:-translate-y-2 transition-all duration-500">Machine Learning & Web Development</h2>
                    <p className="mt-4 text-base md:text-lg text-action-secondary">Master of the chaotic ways of the machine. I stay up late, breaking my brain so the models don’t have to. While others fear being replaced by AI, I’m happily teaching it everything I know with questionable life choices and endless coffee. Learning aggressively so machines can one day learn without me.</p>
                </div>
            </div>
        </>
    )
}