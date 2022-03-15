import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';



import './About';

const abouts = [
  {title: 'Shopify Solutions Expert', description: 'Shopify theme development, store setup, and configuration', imgUrl: '', },
  {title: 'Frontend Developer', description: 'Websites, landing pages, and applications', imgUrl: '', },
  {title: 'Content Writing', description: 'Creating and writing content that keeps customers interested!', imgUrl: '', },
  {title: 'Educator', description: 'English instruction', imgUrl: '', },
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>I Know That <span>Great Communication</span><br />means<span> Great Business!</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <h2 className='p-text' style={{ marginTop: 10 }}>{about.description}</h2>
          </motion.div>
        ))};
      </div>
    </>
  )
}

export default About;