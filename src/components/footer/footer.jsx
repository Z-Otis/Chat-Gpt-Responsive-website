import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-bg'>
      <div className='container text-center mb-3'>
      <h5 className='text-gradient mt-5'>Do you want to step in to the future before others</h5>
      <button className='bg-transparent mt-4 btn me-auto btn-font text-center text-white font btn-outline-light mb-4'>Request early access</button>
      <div className='row mt-5'>
        <div className='col-3'>
          <h3 className='text-white font'>GPT-3</h3>
          <p className='p-text font'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='col-3'>
       <p className='p-text text-white font'>Links</p> 
       <p className='p-text text-white font'> Overons</p> 
       <p className='p-text text-white font'> Social Media</p>
       <p className='p-text text-white font'>Counters</p> 
       <p className='p-text text-white font'>Contact</p> 
       </div>
        <div className='col-3'>
        <p className='p-text text-white font'>Company</p> 
       <p className='p-text text-white font'>  Terms & Conditions</p> 
       <p className='p-text text-white font'> Privacy Policy</p>
       <p className='p-text text-white font'> Contact</p> 
        </div>
        <div className='col-3'>
        <p className='p-text text-white font'> Get in touch</p> 
       <p className='p-text text-white font'> Crechterwoord K12 182 DK Alknjkcb</p> 
       <p className='p-text text-white font'>085-132567</p>
       <p className='p-text text-white font'>info@payme.net</p> 
        </div>
      </div>
      <p className='p-text text-white font mt-5'>© 2021 GPT-3. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
