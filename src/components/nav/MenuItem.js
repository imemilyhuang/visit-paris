import * as React from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
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


const MenuItem = ({ toggle=null, destination, name, big=true }) => {
  const navigate = useNavigate()
  const location = useLocation();
  const handleClick = () => {
    if (location.pathname===destination && toggle) {
      toggle()
    } else {
      navigate(destination) 
    }
  }

  return (
    <motion.div
      variants={variants}
      whileTap={{ scale: 0.95 }}
      className="nav-item"
    >
      <div onClick={handleClick} className="nav-link">
        {
          name==="Home" ?
          <h2>VISIT PARIS</h2> :
          <p style={big ? {fontSize: "20px"} : {fontSize: "14px"}}>{name}</p>
        }
      </div>
    </motion.div>
  );
};

export default MenuItem