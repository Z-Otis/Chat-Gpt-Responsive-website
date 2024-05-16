import React from 'react';
import './headerSec.css'
import headerImg from "../../assets/Header-img.png"
import groupImg from '../../assets/Group-81.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import google from '../../assets/google.png'
import shopify from '../../assets/shopify.png'
import slack from '../../assets/slack.png'



const HeaderSection = () => {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className=" col-md-7 mt-4">
            <h1 className='gradient-text '>Let’s Build Something
                amazing with GPT-3
                OpenAI</h1>
                <p className='header-text mt-2'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='mt-4 mb-4'>
                <input type="text" placeholder='Your Email Address' className='bg-dark px-3 py-2 border-0 text-white'/><span><button className='text-white btns border-0 py-2 px-3 fs-6'><small>Get Started</small></button></span>
                </div>
                <div className='d-flex align-items-center  '>
                    <div className='g-img-container'> <img src={groupImg} className='img-fluid' alt="" /></div>
                   
                    <p className=' text-white g-img-text '>1,600 people requested access a visit in last 24 hours</p>
                </div>
        </div>
        <div className="col-md-5">
            <img src={ headerImg} alt="Ai-img" className='img-fluid'/>
        </div>
        
      </div>
      <div className='d-flex grp-logos justify-content-center'>
        <div className='me-3' >
        <img src={google} className=' img-fluid' alt='' />
        </div>
        <div  className='me-3'>
        <img src={slack} className='img-fluid' alt="" />
        </div>
        <div  className='me-3'>
        <img src={atlassian}  className='img-fluid' alt="" />
        </div>
        <div  className='me-3'>
        <img src={dropbox}  className='img-fluid' alt="" />
        </div>
        <div>
        <img src={shopify}  className='img-fluid' alt="" />
        </div>
        
       
        
      </div>
    </div>
  )
}

export default HeaderSection
