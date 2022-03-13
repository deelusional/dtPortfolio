import React from 'react';

// To import all containers create a new index.js file in the container folder
import { About, Footer, Header, Skills, Testimonial, Work } from './container';

// To import Navbar from components folder
import { Navbar } from './components';

// To import styles from App.scss
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App;