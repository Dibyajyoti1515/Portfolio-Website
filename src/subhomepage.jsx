import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import React, { useState ,useEffect } from 'react';
import { motion } from 'framer-motion';
import "./subhomepage.css"


export default function Subhomepage({ onNext }){
    const text = "  Click this button";
    const [displayedText, setDisplayedText] = useState("");

    const dataOfUser = Object.assign(
        {
          user: { link: '#', icon: faInstagram },
          linkedin: { link: '#', icon: faLinkedin },
          github: { link: '#', icon: faGithub }
        }
      );
        

      const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index) => ({
            y: 0,
          opacity: 1,
          transition: { delay: index * 0.1, type: 'spring', stiffness: 100 }
        })
      };


      const textVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: (index) => ({
          y: 0,
          opacity: 1,
          transition: { delay: 0.5* index, type: 'tween',ease:'easeInOut', stiffness: 100, duration: 1 },
        }),
      };
      
    

        const buttonVariants = {
            hidden: { x: 50, opacity: 0, y: -100 },
            visible: (index) => ({
              x: 0,
              y: 0,
              opacity: 1,
              transition: { delay: index * 0.3, type: 'spring', stiffness: 100 }
            }),
        };


        // Auto-start typing effect on page load
        useEffect(() => {
            let index = 0;
            const interval = setInterval(() => {
            if (index === text.length - 2) {
            clearInterval(interval);
            }
            setDisplayedText((prev) => prev + text[index]);
            index++;
        }, 150);
        return () => clearInterval(interval);
        }, []);


    return(
        <div className='subHomepage'>
            <div className='subhomepage-icons '>
                {Object.entries(dataOfUser).map(([key, { link, icon }], index) => (
                    <motion.div
                    key={key}
                    custom={index}
                    initial="hidden"
                    animate={["visible", "shake"]}
                    variants={buttonVariants} >
                        <a href={link} target="_blank" rel="noopener noreferrer" className="custom-button">
                            <FontAwesomeIcon icon={icon} />
                        </a>
                    </motion.div>
                ))}
            </div>
            <div className='subhomepage-line1 responsive-text'>
                {[..."Welcome To My"].map((char, index) => (
                    <motion.span key={index} custom={index} initial="hidden" animate="visible" variants={letterVariants}>
                        {char}
                    </motion.span>
                ))}
            </div>
            <div className="subhomepage-contant1 responsive-text">
                {["Portfolio "].map((str, index) => (
                    <motion.h2 key={index} className='subhomepage-line2' custom={index} initial="hidden" animate="visible" variants={textVariants}>
                        {str}
                    </motion.h2>
                ))}
                {["Website"].map((char, index) => (
                    <motion.h2 key={index} className='subhomepage-line2' custom={index + 1} initial="hidden" animate="visible" variants={textVariants}>
                       {char}
                    </motion.h2>
                ))}
            </div>
            <motion.button className='subhomepage-button' onClick={onNext} > 
                <FontAwesomeIcon icon={faGlobe} />
                {displayedText}
            </motion.button>
        </div>
    );
}