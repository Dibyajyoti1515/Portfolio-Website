import './ProjectsMainPage.css'
import { useLocation } from 'react-router-dom'
import Ganesh from '../../assets/Ganesa.jpg'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function ProjectsMainPage(){
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    const features = data.pro_Features;

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return(
        <>
        <div className="ProjectsMainPage">
            <div className="projectName">
                <div className="backButtonSys">
                    <button className='backButton' onClick={() => navigate(-1)}>← Back </button>
                    <h4> <span className='backButton_project'>project</span> &nbsp;&gt;&nbsp; { data.pro_name }</h4>
                </div>
                <h1>{ data.pro_name }</h1>
            </div>
            <div className="projectAbout">
                <div className="projectDes">
                    <div className="descriptionProject">
                        { data.pro_des }
                    </div>
                    <div className="skillsRequired">
                        <div className="techStackUsed case1">
                            <div className="codeImgDiv"></div>
                            <div className="totalTech">
                                &nbsp;&nbsp;{data.pro_tecStack.length} <br />
                                <h4>Total Technology</h4>
                            </div>
                        </div>
                        <div className="techStackUsed case2">
                            <div className="codeImgDiv"></div>
                            <div className="totalTech">
                                &nbsp;&nbsp;{data.pro_Features.length} <br />
                                <h4>Total Features</h4>
                            </div>
                        </div>
                    </div>
                    <div className="linksSetup">
                        <div className='cv_download linksSetup_1'>
                            <button className='cv_download_btn' >  Live Demo</button>
                        </div>
                        <div className='cv_download linksSetup_1'>
                            <button className='projects-View-btn'> <span>◁ ▷</span> Github</button>
                        </div>
                    </div>    
                </div>
                <div className="projectImg">
                    <img src={ Ganesh } alt="" />
                </div>
            </div>
            <div className="additionalThings">
            <div className="technology">
                <div className="nameAll">Tech Stack</div>
                <div>
                    {
                        data.pro_tecStack.map((item, subIndex) => (
                                <div key={subIndex}>{item}</div>
                        ))
                    }
                </div>
            </div>
            <div className="featuresDes">
                <div className="nameAll">All Features</div>
                <ul>
                    {
                        features.map((item, subIndex) => (
                            <li key={subIndex}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            </div>
        </div>
        </>
    )
}