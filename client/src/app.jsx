import './styles.css'
import { NavBar } from "./components/navbar";
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';

export const App = () => {
    return <div className="bg-black">
        <NavBar />
        <br />
        <About />
        <br />
        <Skills />
        <br />
        <Projects />
        <br />
        <Contact />
    </div>
}