import {useState} from "react";
import "../styles.css";

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 flex items-center justify-between bg-background-secondary text-action-secondary border-b-2 border-action-primary z-50 px-4">
            <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-5xl p-2">
                    <span className="font-bold text-3xl sm:text-6xl text-action-primary">A</span>
                    <span className="ml-1 text-lg sm:text-2xl">bhinav.dev</span>
                </h1>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-6 px-2 text-lg md:text-2xl">
                <li><a href="#about" className="active:text-action-secondary hover:underline">about</a></li>
                <li><a href="#skills" className="active:text-action-secondary hover:underline">skills</a></li>
                <li><a href="#activity" className="active:text-action-secondary hover:underline">activity</a></li>
                <li><a href="#projects" className="active:text-action-secondary hover:underline">projects</a></li>
                <li><a href="#cta" className="active:text-action-secondary hover:underline">react out</a></li>
                <li><a href="#contact" className="active:text-action-secondary hover:underline">contact</a></li>
            </ul>

            {/* Mobile hamburger */}
            <button
                className="md:hidden p-2 rounded-md text-action-primary"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {open ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile menu panel */}
            {open && (
                <div className="absolute left-0 right-0 top-full bg-background-secondary border-b border-action-primary md:hidden z-40">
                    <ul className="flex flex-col gap-2 p-4 text-lg">
                        <li><a href="#about" onClick={() => setOpen(false)} className="hover:underline">about</a></li>
                        <li><a href="#skills" onClick={() => setOpen(false)} className="hover:underline">skills</a></li>
                        <li><a href="#activity" onClick={() => setOpen(false)} className="hover:underline">activity</a></li>
                        <li><a href="#projects" onClick={() => setOpen(false)} className="hover:underline">projects</a></li>
                        <li><a href="#cta" onClick={() => setOpen(false)} className="hover:underline">react out</a></li>
                        <li><a href="#contact" onClick={() => setOpen(false)} className="hover:underline">contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}