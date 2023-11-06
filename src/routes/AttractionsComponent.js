import React from 'react'
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
  const {id} = useParams()

  const info = getInfo(id)

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh"}}>
      <img
        className='cover-image2'
        src={`/assets/attractions${info.image}.jpg`}
        alt={info.name}
      />
      <div style={{padding: "6rem", display: "flex", flexDirection: "row"}}>
        <div style={{width: "40%", padding: "3rem", backgroundColor: colors.colorDarkMono, color: colors.white, display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <h2>{info.name}</h2>
          <p className='subtitle' style={{marginBottom: "10px"}}>{info.subtitle}</p>
          {info.address && <p style={{marginBottom: "10px"}}>Address: {info.address}</p>}
          {info.district && <p style={{marginBottom: "10px"}}>District: {info.district}</p>}
          {info['suggested-duration'] && <p>Suggested Duration: {info['suggested-duration']} hours</p>}
        </div>
        <div style={{width: "60%", padding: "3rem",backgroundColor: colors.white}}>
          <p style={{fontWeight: "500"}}>Description:</p>
          <p style={{marginBottom: "30px"}}>{info.desc}</p>
          <p style={{fontWeight: "500"}}>Fun fact:</p>
          <p>{info['fun-fact']}</p>
        </div>
      </div>
    </div>
  )
}

export default AttractionsComponent