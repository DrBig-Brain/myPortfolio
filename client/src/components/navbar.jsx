import "../styles.css";

export const NavBar = () => {
    return(<>
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
        <div>
            <h1 className = "text-xl font-bold">Abhinav Mishra</h1>
        </div>
        <ul className="flex gap-6">
            <li><a href = "/about">About</a></li>
            <li><a href = "/projects">Projects</a></li>
            <li><a href = "/skills">Skills</a></li>
            <li><a href = "/contact">Contact</a></li>
        </ul>
    </nav>

    </>)
}