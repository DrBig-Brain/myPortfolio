import "../styles.css";

export const NavBar = () => {
    return (<>
        <nav className=" sticky top-0 flex items-center justify-between bg-background-secondary text-action-secondary border-b-2 border-action-primary">
            <div>
                <h1 className="text-5xl p-2"><span className="font-bold text-6xl text-action-primary">A</span>bhinav.dev</h1>
            </div>
            <ul className="flex gap-6 px-2 text-2xl">
                <li><a href="#about" className="active:text-action-secondary hover:underline">About</a></li>
                <li><a href="#skills" className="active:text-action-secondary hover:underline">Skills</a></li>
                <li><a href="#projects" className="active:text-action-secondary hover:underline">Projects</a></li>
                <li><a href="#contact" className="active:text-action-secondary hover:underline">Contact</a></li>
            </ul>
        </nav>

    </>)
}