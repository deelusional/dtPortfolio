import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1], 
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          
          <div className='badge-cmp app__flex'>
            {/* <span>👋</span> */}
            <div style={{ marginLeft: 20 }}>
              <h1 className='head-text'>HI! I'M DTAP</h1>
              <p className='p-text'>Shopify Solutions Expert</p>
              <p className='p-text'>Front End Developer</p>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
             <p className='p-text'>Shopify Store Setup</p>
             <p className='p-text'>Theme Development</p>
             <p className='p-text'>Design && Customization</p>
             <p className='p-text'>Store Migration</p>
          </div>

    
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-bg" />
        <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.flutter, images.javascript].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');