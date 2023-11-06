import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import attractionData from '../components/attractions/data';
import colors from '../styles/colors';

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
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh"}}>
      <img
        className='cover-image2'
        src={`/assets/attractions${info.image}.jpg`}
        alt={info.name}
      />
      <div style={{padding: "6rem"}}>
        <img
          style={{width: "100%", height: "400px", objectFit: 'cover',marginBottom: "-5px"}}
          src={`/assets/attractions${info.image}.jpg`}
          alt={info.name}
        />
        <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{width: "40%", padding: "3rem", backgroundColor: colors.colorDarkMono, color: colors.white, display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h2>{info.name}</h2>
            <p className='subtitle' style={{marginBottom: "10px"}}>{info.subtitle}</p>
            {info.address && <p style={{marginBottom: "10px"}}>Address: {info.address}</p>}
            {info.district && <p style={{marginBottom: "10px"}}>Arrondissement: {info.district.replaceAll('island', 'islands of Paris')}</p>}
            {info['suggested-duration'] && <p>Suggested Duration: {info['suggested-duration']} hours</p>}
          </div>
          <div style={{width: "60%", padding: "3rem",backgroundColor: colors.white}}>
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