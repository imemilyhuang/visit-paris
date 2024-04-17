import React from 'react'
import Nav from './Nav'
import { motion, useCycle } from 'framer-motion'
import Toggle from './Toggle'
import "../../styles/nav.scss" 
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Link } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPosition'
import colors from '../../styles/colors'

const WrapNav = ({component}) => {
    const [isOpen, toggleOpen] = useCycle(false, true);

    const {width} = useWindowDimensions()

    const sidebar = {
        open: { x: 0, transition: { type: "circIn", duration: 0.5, }, opacity: 1},
        closed: { x: width, transition: { type: "circInOut", duration: 0.5, delay: 0.65}, opacity: 0, zIndex: -1}
    }

    const scrollY = useScrollPosition()

    return <motion.div
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        animate={{opacity: 1}}
    >
        <div className='navContainer'>
            <div className='nav-color' style={scrollY < 50 ? {opacity: scrollY/50} : {opacity: 1}}></div>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <motion.div className="nav-background" variants={sidebar}>
                    <Nav toggle={() => toggleOpen()} />
                </motion.div>

                <Toggle toggle={() => toggleOpen()} />
            </motion.nav>
            <Link to="/">
                <h2 className='logo-text nav-link'>VISIT PARIS</h2>
            </Link>
        </div>
        
        {component}

        <div className='footer-container'>
            <Nav toggle={() => toggleOpen()} horizontal={true} />
            <p style={{color: colors.colorDarkMid, marginTop: "20px", textAlign: "center"}}>Copyright © 2023 Visit Paris.</p>
        </div>
    </motion.div>
}

export default WrapNav