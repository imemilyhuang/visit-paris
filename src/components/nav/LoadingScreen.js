import React from 'react'
import { motion } from "framer-motion";
import AnimatedText from './AnimatedText'

const LoadingScreen = ({loading, setShowContent}) => {
  return (
    <motion.div exit={{opacity: 0}} animate={{opacity: 1}} className='loading-screen' >
      <AnimatedText el="h1" text={["VISIT PARIS"]} className="cover-title full-container text-center" />
      
      <motion.div animate={{ opacity: loading ? 1 : 0 }}>
        <AnimatedText el="p" text={["Preparing your insider's guide..."]} className="cover-title full-container text-center" repeatDelay={5000} />
      </motion.div>

      {
        !loading &&
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button onClick={() => setShowContent(prev => !prev)}>
            <p className='nav-link-button'>ENTER NOW</p>
          </button>
        </motion.div>
      }
    </motion.div>
  )
}

export default LoadingScreen