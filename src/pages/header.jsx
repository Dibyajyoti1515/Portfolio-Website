import './header.css'
import { Link } from 'react-router-dom';

export default function header() {
    let candateName = {name: "DIBYA"}
   return(
    <div>
        <div className="headTop">
            <div className='candateName'>[{candateName.name}]</div>
            <div className="navbarright">
            <nav className="navbar">

            <Link to="/"><div className='navBarElement'>Home <hr /></div></Link>
            <Link to="/about"><div className='navBarElement'>About <hr /></div></Link>
            <Link to="/portfolio"><div className='navBarElement'>Portofolio <hr /></div></Link>
            <Link to="/contact"><div className='s'>Contact <hr /></div></Link>
                
            </nav>
            </div>
        </div>
    </div>
   );
}