import './header.css'
import { useEffect, useRef, useState } from 'react';
import Home from './ComponentMain/home.jsx'
import About from './ComponentMain/about.jsx';
import Portfolio from './ComponentMain/portfolio.jsx';
import Contact from './ComponentMain/Contact.jsx'
import { tr } from 'framer-motion/client';

export default function MainPage() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    let candateName = {name: "DIBYA"}
    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    
    const scrollToSection = (ref) =>{
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

   return(
    <>
    <div className="pro_page">
    <div>
        <div className="headTop">
            <div className='candateName'>[{candateName.name}]</div>
            <div className="navbarright">
            <nav className="navbar">
                <div ><div className='navBarElement' onClick={() => scrollToSection(homeRef)}>Home <hr /></div></div>
                <div ><div className='navBarElement' onClick={() => scrollToSection(aboutRef)}>About <hr /></div></div>
                <div ><div className='navBarElement' onClick={() => scrollToSection(portfolioRef)}>portfolio <hr /></div></div>
                <div ><div className='navBarElement' onClick={() => scrollToSection(contactRef)}>Contact <hr /></div></div> 
            </nav>
            </div>
        </div>
        <div className="sidebar">
            <div className="buttonClass" style={{display: sidebarVisible? "none" : "flex"}}>
                <button onClick={() => setSidebarVisible(true)}>🏠</button>
            </div>
            <div className= {sidebarVisible? "sidebar_Setup" : "sidebar_Setup_Open" }>
                <div className="setupCloseOpen">
                    <div className="crossBtn" onClick={() => setSidebarVisible(false)}>✕</div>
                    <div className='candateName'>[{candateName.name}]</div>
                </div>
                <hr className='hr1' />
                <div className="navRight">
                    <nav className="navRight_11">
                        <div ><div className='navBarElement_1' onClick={() => scrollToSection(homeRef)}>Home </div></div>
                        <div ><div className='navBarElement_1' onClick={() => scrollToSection(aboutRef)}>About</div></div>
                        <div ><div className='navBarElement_1' onClick={() => scrollToSection(portfolioRef)}>portfolio </div></div>
                        <div ><div className='navBarElement_1' onClick={() => scrollToSection(contactRef)}>Contact </div></div> 
                    </nav>
                </div>
                <div className="close_last">
                    Contact Info <br />
                    All rights reserved ©️ 2025
                </div>
            </div>
        </div>
    </div>
    <div className="contantPage">
        <div className='homepage' ref={homeRef}><Home /></div>
        <div className="aboutpage" ref={aboutRef}><About /></div>
        <div className="portfoliopage" ref={portfolioRef}><Portfolio /></div>
        <div className="contactPage" ref={contactRef}><Contact /></div>
    </div>
    </div>    
    </>
   );
}