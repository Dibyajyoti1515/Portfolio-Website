import './App.css'
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Maincontant from './pages/maincontant.jsx'
import Subhomepage from './subhomepage.jsx'

function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);

  return(
    <> 
        <AnimatePresence exitBeforeEnter>
          {showSecondPage ? (
            <Maincontant key="bbbhf" />
          ) : (
            <Subhomepage key="abcd" onNext={() => setShowSecondPage(true)} />
          )}
        </AnimatePresence>
    </>
  )
}

export default App
