import { useRef } from 'react';
import './about.css'
import Ganesh from "../../assets/Ganesa.jpg"
export default function About(){
    const aboutRef = useRef(null);
    // const point1 = "OUTR(CET), Bhu"
    const point2 = "DIBYAJYOTI PARIDA"
    const point3 = "(He/Him)"
    const point4 = "I'm a passionate full-stack developer who loves blending clean code with bold ideas. Always curious, a little crazy, and driven to build cool, impactful tech solutions."
    return(
        <>
        <div className="about" ref={aboutRef}>
            <div className=" profasonTarget coat_me">
                <h2 className='devloperstyle'>
                    About Me
                </h2>
                <h3>
                    ✨Always Learning, always experimenting ✨
                </h3>
            </div>
            <div className='aboutme'>    
                <div className="aboutRight">
                    <img src={Ganesh} alt="Ganesa" className='ganeshpic' />
                </div>
                <div className="aboutLeft">
                    <br />
                    <div className="description">
                        <div className="profasonTarget">
                            <h1 className="devloperstyle">Hello, I&apos;m</h1>
                        </div>
                        <div className='nameplate_design'> 
                            <span className="description2"></span> {point2}{point3}
                        </div>
                        <div className='about_Me_2'>
                            {point4}
                        </div>
                        <div className='cv_download'>
                            <button className='cv_download_btn'> 🗒️Download CV</button>
                        </div>
                        <div className='cv_download'>
                            <button className='projects-View-btn'> <span>◁ ▷</span> View Projects</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}