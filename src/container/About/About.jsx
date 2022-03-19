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
        I deliver solid technical solutions to organizations with efficient communication and thorough outcomes, thanks to my education and expertise in both the Information Technology and Education industries. It is commonly recognized that demonstrating development and design talents is crucial, but when soft skills are integrated, business challenges can be solved faster.
      </p>
      <br />
      <p className='p-text'>
        That's where I enter the picture! Through Shopify and Frontend Development, I deliver business solutions tailored to your eCommerce needs. Working as a freelancer remotely allows me to focus solely on you, the client. You're more than a number! I treat your company as if it were mine because, at the end of the day, if your business does not succeed, neither do I. This is a win-win situation!
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