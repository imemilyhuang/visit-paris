import React from 'react'
import { NavLink } from "react-router-dom"
import "../../styles/card.scss"

const Card = ({info, hasLink=true}) => {
  return (<>
    {
      hasLink ?
      <NavLink to={"/attractions"+info.image} className="img-link">
        <figure>
          <img src={`/assets/attractions${info.image}.jpg`} alt={info.name}/>
          <figcaption>
            <div style={{padding: "20px"}}>
            <h2>{info.name.toUpperCase()}</h2>
            <h4 style={{marginTop: "10px"}} className='subtitle'>{info.subtitle}</h4>
            </div>
          </figcaption>
        </figure>
      </NavLink> :
      <NavLink to={""} className="img-link">
        <figure>
          <img src={`${info.image}`} alt={info.name}/>
          <figcaption>
            <div style={{padding: "20px"}}>
            <h2>{info.name.toUpperCase()}</h2>
            <p>{info.subtitle}</p>
            </div>
          </figcaption>
        </figure>
      </NavLink>
    }
  </>
  )
}

export default Card