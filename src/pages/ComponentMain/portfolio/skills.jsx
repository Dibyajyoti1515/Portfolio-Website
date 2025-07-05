import './Skills.css'
import s1 from '../../../assets/react.svg'
import s2 from '../../../assets/github.png'
import s3 from '../../../assets/java.png' 
import s4 from '../../../assets/js.png'
import s5 from '../../../assets/letter-c.png' 
import s6 from '../../../assets/social (1).png'
import s7 from '../../../assets/social.png' 
import s8 from '../../../assets/sql-server.png'
export default function Skills(){
    return(
        <>
        <div className="skills">
            <div className="img_container" >
                <img src={s1} alt="" />
            </div>
            <div className="img_container" >
                <img src={s2} alt="" />
            </div>
            <div className="img_container" >
                <img src={s3} alt="" />
            </div>
            <div className="img_container">
                <img src={s4} alt="" />
            </div>
            <div className="img_container">
                <img src={s5} alt="" />
            </div>
            <div className="img_container">
                <img src={s6} alt="" />
            </div>
            <div className="img_container">
                <img src={s7} alt="" />
            </div>
            <div className="img_container">
                <img src={s8} alt="" />
            </div>
        </div>
        </>
    );
}