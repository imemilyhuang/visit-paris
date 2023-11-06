import React from 'react'
import { motion } from 'framer-motion'

const Transportation = () => {
  return (
    <div>
      <motion.img 
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        animate={{opacity: 1}}
        className='cover-image'
        src='/assets/covers/transportation.png'
      />
      <h1 className='cover-title'>TRAVEL IN PARIS</h1>
    </div>
  )
}

export default Transportation