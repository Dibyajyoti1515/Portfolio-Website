import Projects_Card from "./Projects_Card";
import "./Projects.css"
export default function Projects(){
    const pro1 = {
        "pro_name": "NoteMaker",
        "pro_time": "3month",
        "pro_des": "Direct Note Making from Youtube and any outube and any other website Direct No website Direct Nooutube and any other website Direct Nooutube and any other website Direct Note Making from Youtube and any other websiteDirect Note Making from Youtube and any other websiteDirect Note Making from Youtube and any other website",
        "pro_group" : "N",
        "pro_side": "null",
        "pro_img": "null",
        "pro_limit": 12,
        "pro_tecStack": ["javascript"," javascript","javascript", "React", "MySQL", "NodeJS"],
        "pro_Imgs":[],
        "pro_Features": ["Take easy to get notes", "required less time find notes", "very Easy to use "]
    }

    const pro2 = {
        "pro_name": "Love Calculator",
        "pro_time": "1day",
        "pro_des": "Direct Note Making from Youtube and any other website Direct Note Making from Youtube and any other websiteDirect Note Making from Youtube and any other websiteDirect Note Making from Youtube and any other website",
        "pro_group" : "N",
        "pro_side": "null",
        "pro_img": "null",
        "pro_limit": 10,
        "pro_tecStack": ["javascript", "React", "MySQL", "NodeJS"],
        "pro_Imgs":[],
        "pro_Features" : ["Easy to calculate Love", "A notes comes from Gemini"],
    }

    return(
        <>
        <div className="projects">
            <Projects_Card pro_details = {pro1}/>
            <Projects_Card pro_details = {pro2}/>
            <Projects_Card pro_details = {pro1}/>
        </div>
        </>
    );
}