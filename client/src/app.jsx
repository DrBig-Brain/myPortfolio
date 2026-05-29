import './styles.css'
import { Quote } from './components/quote';
import { NavBar } from "./components/navbar";
import { About } from './components/about';
import { Skills } from './components/skills';
import { Github } from './components/github';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import {Cta} from './components/cta';
export const App = () => {
    return <div className="bg-background font-mono">
        <NavBar />
        <br />
        <About />
        <br />
        <Quote id="1"/>
        <Skills />
        <br />
        <Quote id="6"/>
        <Github />
        <br />
        <Quote id="3"/>
        <Projects />
        <br/>
        <Quote id="4"/>
        <Cta/>
        <br />
        <Quote id="5"/>
        <Contact />
    </div>
}