import './Projects_Card.css'
import Default_pic from "../../../assets/Ganesa.jpg";
import { useNavigate} from "react-router-dom";


export default function Projects_Card({ pro_details }){

    const navigate = useNavigate();
    const { pro_name, pro_time, pro_des, pro_group, pro_side, pro_img, pro_limit} = pro_details;

    const getTrimmedText = (text, limit) => {
        const words = text.split(" ");
        
        if(words.length <= limit) 
            return text;

        return words.slice(0, limit).join(" ") + "...";
    };

    const handleClick = () => {
        navigate("/project", {state: pro_details});
    };
    
    return(
        <>
        <div className="Projects_Card">
            <div className="imgdiv">
                {/* <img src={pro_img === null ? Default_pic : pro_img} alt="Project img" /> */}
                <img src={Default_pic} alt="pic" />
            </div>
            <div className="pro_details_div">
                <div className="pro_about">
                <div className="pro_name">{pro_name}</div>
                <div className="pro_time"> Duration: {pro_time}</div>
                <div className="pro_des">{getTrimmedText(pro_des, pro_limit)}</div>
                </div>
                <div className="buttons_pro">
                    <a href={pro_side} className='live_Demo_cls'>Live Demo 🛠️</a>
                    <button className='details_class' onClick= {handleClick}> Details →</button>
                </div>
            </div>
        </div>
        </>
    )
}