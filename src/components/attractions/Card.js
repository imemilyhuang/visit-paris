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
            <h2 className='smaller' style={{marginBottom: "5px"}}>{info.name.toUpperCase()}</h2>
            <p>{info.subtitle}</p>
            <p className='nav-link-button-light'>LEARN MORE</p>
            </div>
          </figcaption>
        </figure>
      </NavLink> :
      <div className="img-link">
      <a href={info.link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
        <figure>
          <img src={`${info.image}`} alt={info.name}/>
          <figcaption>
            <div style={{padding: "20px"}}>
            <h2 className='smaller' style={{marginBottom: "5px"}}>{info.name.toUpperCase()}</h2>
            <p>{info.subtitle}</p>
            <p className='nav-link-button-light'>BOOK</p>
            </div>
          </figcaption>
        </figure>
        </a>
      </div>
    }
  </>
  )
}

export default Card