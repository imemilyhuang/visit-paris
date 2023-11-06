import React from 'react'
import { motion } from "framer-motion"
import MenuItem from './MenuItem'
import "../../styles/nav.scss"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  }
};

const Nav = ({horizontal=false, toggle}) => {
  const routeInfo = [
    {name: "Attractions", destination: "/attractions"},
    {name: "Activities", destination: "/activities"},
    {name: "Accommodations", destination: "/accommodations"},
    // {name: "Dining", destination: "/dining"},
    // {name: "Transportation", destination: "/transportation"}
  ]

  return (
    <motion.ul variants={variants} className={horizontal ? 'nav-ul2': 'nav-ul'}>
      {
        horizontal ?
        <MenuItem destination={"/"} name={"Home"} />:
        <MenuItem toggle={toggle} destination={"/"} name={"Home"} />
      }
      {
        horizontal ?
        <div style={{height: "10px"}} />:
        <div style={{height: "20px"}} />
      }

      {
        horizontal ?
        <div style={{display: "flex", flexDirection: 'row', flexWrap: 'wrap'}}>
          {routeInfo.map(val => {
            return <div style={{display: "flex", flexDirection: "row"}} key={val.name}>
              <MenuItem big={false} destination={val.destination} name={val.name} />
              <div style={{width: "20px"}} />
            </div>
          }
          )}
        </div> :
        routeInfo.map(val => (
          <MenuItem toggle={toggle} destination={val.destination} name={val.name} key={val.name} />
        ))
      }
    </motion.ul>
  )
}

export default Nav