import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Manpage from './header.jsx';
import ProjectsMainPage from './ProjectsMainPage/ProjectsMainPage.jsx'
import './maincontant.css'
import Footer from './otherComponents/footer.jsx';
export default function Maincontant(){

  return (
    <motion.div
      className="bbbhf-container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

    <Router>
      <div className="content">
        <Routes>
          <Route path="/" element={<Manpage />} />
          <Route path="/Project" element={<ProjectsMainPage />} />
        </Routes>
      </div>
      {/* <Footer></Footer> */}
    </Router>
    </motion.div>
  );
};
