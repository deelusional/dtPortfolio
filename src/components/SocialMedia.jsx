import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <FaFacebook />
      </div> 
      <div>
        <BsTwitter />
      </div>              
    </div>
  )
}

export default SocialMedia