import React from 'react'
import { motion } from 'framer-motion'
import Map from '../components/map/Map'
import attractionData from '../components/attractions/data'
import Card from '../components/attractions/Card'

const Attractions = () => {
  const renderAttracts = attractionData.map(val =>
    <Card key={val.name} info={val} />  
  )
  return (
    <div className='home-container'>
      <motion.img 
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        animate={{opacity: 1}}
        className='cover-image'
        src='/assets/covers/attractions.png'
      />
      <h1 className='cover-title'>SEE PARIS</h1>
      <p className='text-center full-container'>From the Eiffel Tower's soaring elegance to the Mona Lisa's enigmatic smile, Paris dazzles at every turn. Savor exquisite cuisine, explore historic landmarks, and embrace the romance of Montmartre. With world-class art, captivating history, and endless charm, Paris promises a journey of a lifetime.</p>
      <Map />

      <h2 className='text-center' style={{marginTop: "60px", marginBottom: "60px"}}>TOP ATTRACTIONS</h2>
      <div className='grid-wrapper'>
        {renderAttracts}
      </div>
    </div>
  )
}

export default Attractions