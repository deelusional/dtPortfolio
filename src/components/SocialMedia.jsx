import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/dtap28/' target='_blank'><BsLinkedin /></a>
      </div>
      <div>
        <a href='https://www.facebook.com/dee.tap.77/' target='_blank'><FaFacebookF /></a>
      </div> 
      <div>
        <a href='https://twitter.com/imtapped74' target='_blank'><BsTwitter /></a>
      </div> 
      <div>
        <a href='https://github.com/deelusional' target='_blank'><BsGithub /></a>
      </div> 
    </div>
  )
}

export default SocialMedia