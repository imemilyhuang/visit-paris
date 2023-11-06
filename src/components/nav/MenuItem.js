import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/nav.scss"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
    pointerEvents: "auto"
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    },
    pointerEvents: "none",
  }
};


const MenuItem = ({ destination, name, big=true }) => {
  return (
    <motion.li
      variants={variants}
      whileTap={{ scale: 0.95 }}
      className="nav-item"
    >
      <Link className="nav-link" to={destination}>
        {
          name==="Home" ?
          <h2>VISIT PARIS</h2> :
          <p style={big ? {fontSize: "20px"} : {fontSize: "14px"}}>{name}</p>
        }
      </Link>
    </motion.li>
  );
};

export default MenuItem