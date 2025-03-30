import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './home.css'
import { useState , useEffect} from "react";
import { motion } from 'framer-motion';
import TachBudge from "./tachBudge.jsx";
import comppics1 from '../assets/comppics1.png';
import { div } from "framer-motion/client";

const texts = ["Computer Engineering Student" , "Tech Enthusiast"];
export default function Home(){
    const [click, setclick] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleChars, setVisibleChars] = useState('');
    const [phase, setPhase] = useState('typing');

    useEffect(()=> {
        const currentText = texts[currentIndex];
        let timeout;

        if(phase === "typing"){
            currentText.split('').forEach((char, index) => {
                setTimeout(() => {
                    setVisibleChars((prev) => prev + char);
                }, index * 200);
            });
            timeout = setTimeout(() => setPhase('back'), currentText.length * 200 + 1000 );
        } else if(phase === "back"){
            visibleChars.split('').forEach((_, index) => {
                setTimeout(() => {
                    setVisibleChars((prev) => prev.slice(0,-1));
                }, index* 100);
            });

            timeout = setTimeout(()=> {
                setPhase("typing");
                setCurrentIndex((prev) => (prev + 1) % texts.length);
                setVisibleChars('');
            }, visibleChars.length * 100 + 500 );
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, phase])
    

    return (
        <div>
        <div className="homepagesetup">
           <div className="profasssion_home">
            <br />
                <div className="readytoinovate" onClick={()=> setclick(true)}>
                    <FontAwesomeIcon icon={faStar} className={click ? "backcolour" : "" }></FontAwesomeIcon>
                    Ready to Innovate
                </div>
                <div className="profasonTarget">
                    <h1>Full Stack</h1>
                    <h1 className="devloperstyle">Developer</h1>
                </div>
                <div className='clgBranchset'>
                    <div className="clgBranchset_nameplate">{visibleChars || '\u00A0'}
                        &nbsp;<span className="clgBranchsetBar-side"></span>
                    </div>
                </div>
                <div className="discrptionofWork">
                Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions With AI.
                </div>
                <div className="teachstack">
                    <TachBudge teachtaskname="JavaScript"></TachBudge>
                    <TachBudge teachtaskname="Node.js"></TachBudge>
                    <TachBudge teachtaskname="React"></TachBudge>
                    <TachBudge teachtaskname="Bootstrap"></TachBudge>
                </div>
            </div>
            <div className="sidepicscomputer">
                <img src= {comppics1} alt="neii" />
            </div>
        </div>
        </div>
    );
}