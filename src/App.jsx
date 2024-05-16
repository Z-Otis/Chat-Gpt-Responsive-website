
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './components/Header/header';
import HeaderSection from './components/HeaderSec/HeaderSection';
import WhatIsGptSection from './components/whatsIsGptSection.jsx/whatIsGptSection';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Blog from './components/blog/blog';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className='color-bg'>
      <div className='gradient_bg'>
      <Header />
      <HeaderSection />
      </div>
      <WhatIsGptSection />
       <Features />
      <Blog />
      <Footer />  
      </div>
    </div>

  )
}

export default App
