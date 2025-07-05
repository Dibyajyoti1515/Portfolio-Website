import { useState } from "react";
import "./portfolio.css"
import Skills from "./portfolio/skills";
import Projects from "./portfolio/Projects";
import Certificates from "./portfolio/Certificates";

export default function Portfolio(){
    const [currentTab, setCurrentTab] = useState('Projects');

    return(
        <>
        <br />
        <div className="profasonTarget">
            <h1 className="devloperstyle">Portfolio</h1>
        </div>
        <div className="portfolio">
            <br />
            <div className="portfolio_Top">
                <div className="portfolio_Top_Projects" onClick={() => setCurrentTab('Projects')}> Projects </div>
                <div className="portfolio_Top_Certificates" onClick={() => setCurrentTab('certificates')}> Certificates </div>
                <div className="portfolio_Top_skills" onClick={() => setCurrentTab('skills')}> Skills </div>
            </div>
            <br />
            <div className="portfolio_Bottom">
                { currentTab === 'Projects' ? <Projects /> : currentTab === 'certificates' ? <Certificates /> : <Skills />}
            </div>
        </div>
        </>
    );
}