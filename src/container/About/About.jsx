import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    // "abouts" must be double quotes
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Believe <span>Great Communication</span> And<br /><span> Technical Skills</span> Result In<span> Business Solutions!</span></h2>
      <p className='p-text'>
        Having an education and experience in both the Information Technology and Education fields, I bring solid technical solutions to businesses with effective communication and detailed results. It is well known that showcasing development and design skills are important, but when soft skills are combined, solutions to business problems becomes obtainable quicker.  
      </p>
      <br />
      <p className='p-text'>
        That's where I come in! I provide business solustions that are geared toward your eCommerce needs through Shopify and Frontend Development. Freelancing and working remote gives me the comfort to focus directly on you as the client personally. You are not just a number! I treat your business as if it were my own because at the end of the day, if you don't succeed, neither do I. This is a win-win!
      </p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__primarybg',
);