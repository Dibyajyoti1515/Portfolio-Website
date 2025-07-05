import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './home.css'
import { useState } from "react";
import TachBudge from "./tachBudge.jsx";
import { useRef } from 'react';
import comppics1 from '../../assets/comppics1.png'
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
   
const texts = ["Computer Engineering Student" , "Tech Enthusiast"];
export default function Home(){    
    const [click, setclick] = useState(false);
    const [hovered1, setHoverd1] = useState(null); 
    const homeRef = useRef(null); 


    return (
        <>
        <div className="homepagesetup" ref={homeRef}>
           <div className="profasssion_home">
                <div className="readytoinovate" onClick={()=> setclick(true)}>
                    <FontAwesomeIcon icon={faStar} className={click ? "backcolour" : "" }></FontAwesomeIcon>
                    Ready to Innovate
                </div>
                <br />
                <div className="profasonTarget">
                    <h1>Full Stack</h1>
                    <h1 className="devloperstyle">Developer</h1>
                </div>
                <div className='clgBranchset'>
                    <Typewriter
                        words={texts}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={200}
                        delaySpeed={2000}
                        deleteSpeed={100}
                        />
                </div>
                <div className="discrptionofWork">
                <div> <span className="description1">⇒</span> Creating Innovative, Functional, and User-Friendly </div>
                <div>Websites for Digital Solutions With AI.</div>
                </div>
                <div className="teachstack">
                    <TachBudge teachtaskname="JavaScript"></TachBudge>
                    <TachBudge teachtaskname="Node.js"></TachBudge>
                    <TachBudge teachtaskname="React"></TachBudge>
                    <TachBudge teachtaskname="Devops"></TachBudge>
                </div>
                <br />
                <div className="btnclass_about">
                    <motion.div 
                        className="section"
                        itemType="button"
                        onMouseEnter={() => setHoverd1('projects')}
                        onMouseLeave={() => setHoverd1(null)}
                        animate= {{
                            width: hovered1 === 'projects' ? '30rem' :'7rem',
                            x:hovered1 === 'projects' ? '5rem' :hovered1 === 'certificates' ? '-30rem' :'0rem',
                            textAlign:hovered1 === 'projects' ? "right" : "left",
                            alignContent:"normal",
                            transition: {
                                duration: 0.6,
                                ease: 'easeInOut',
                            },
                        }}
                    >
                        Projects
                    </motion.div>

                    <motion.div 
                        className="splitter"
                        animate={{
                            x: hovered1 === 'projects' ? '20rem' : hovered1 === 'certificates' ? '-20rem' :'0rem',
                            transition: {
                                duration: 0.6,
                                delay: 0.2,
                                ease: 'easeInOut',
                            },
                        }}
                    />
                    <motion.div 
                        className="section"
                        itemType="button"
                        onMouseEnter={() => setHoverd1('certificates')}
                        onMouseLeave={() => setHoverd1(null)}
                        animate= {{
                            width: hovered1 === 'certificates' ? '30rem' :'7rem',
                            x:hovered1 === 'certificates' ? '-5rem' :hovered1 === 'projects' ? '30rem' :'0rem',
                            transition: {
                                duration: 0.6,
                                ease: 'easeInOut',
                            },
                        }}
                    >
                    Certificates
                    </motion.div>
                </div>
            </div>
            <div className="sidepicscomputer">
                <img src= {comppics1} alt="neii" />
            </div>
        </div>
        </>
    );
}