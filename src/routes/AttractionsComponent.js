import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import attractionData from '../components/attractions/data';

const getInfo = (imageId) => {
  for (let i = 0; i < attractionData.length; i++) {
    if (attractionData[i].image===`/${imageId}`) {
      return attractionData[i]
    }
  }
}

const AttractionsComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const {id} = useParams()

  const info = getInfo(id)

  return (
    <div className='attraction-component-container'>
      <img
        className='attraction-component-image-background-image'
        src={`/assets/attractions${info.image}.jpg`}
        alt={info.name}
      />
      <div className='attraction-overlay-container'>
        <img
          className='attraction-component-image'
          src={`/assets/attractions${info.image}.jpg`}
          alt={info.name}
        />
        <div className='attraction-component-info-container'>
          <div className='attraction-component-part1'>
            <h2>{info.name}</h2>
            <p className='subtitle' style={{marginBottom: "10px"}}>{info.subtitle}</p>
            {info.address && <p style={{marginBottom: "10px"}}>Address: {info.address}</p>}
            {info.district && <p style={{marginBottom: "10px"}}>Arrondissement: {String(info.district).replaceAll('island', 'islands of Paris')}</p>}
            {info['suggested-duration'] && <p>Suggested Duration: {info['suggested-duration']} hours</p>}
          </div>
          <div className='attraction-component-part2'>
            <p style={{marginBottom: "30px"}}>{info.desc}</p>
            <p style={{fontWeight: "500"}}>Did you know?</p>
            <p>{info['fun-fact']}</p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default AttractionsComponent