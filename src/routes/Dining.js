import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Dining = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <motion.img 
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        animate={{opacity: 1}}
        className='cover-image'
        src='/assets/covers/dining.png'
      />
      <h1>TASTE PARIS</h1>
    </div>
  )
}

export default Dining