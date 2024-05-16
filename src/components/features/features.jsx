import React from 'react'
import './features.css'
import featureImg from '../../assets/feature-image.png'


const Features = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className="col-5 p-2">
          <h6 className='text-gradient'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h6>
        </div>
        <div className="col-3">
          
          <div className='mb-4'>
          <div className="bar mb-1"></div>
            <p className="header">Improving end distrusts instantly </p>
          </div>
          <div className='mb-4 '>
          <div className="bar"></div>
            <p className="header">Become the tended active</p>
          </div>
          <div className='mt-4 '>
          <div className="bar"></div>
            <p className="header">Message or am nothing</p>
          </div>
          <div className=' mt-5 mt-md-4'>
            <div className="bar"></div>
            <p className="header">Really boy law county</p>
          </div>
        </div>
        <div className="col-4">
          <div className='mb-4'>
            <p className='small p-text'>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
            </div>
          <div className='mb-4'>
            <p className='small p-text'>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
            </div>
          <div className='mb-4'>
            <p className='small p-text'>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
          </div>
          <div className='mb-4'>
            <p className='small p-text'>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
          </div>
        </div>
      </div>
      
      <div className='row mt-4 d-flex align-items-center'>
        <div className="col-6">
          <div><img src={featureImg} className='img-fluid' alt="" /></div>
        </div>
        <div className="col-6">
          <p className='p-text'>Request early access to get started</p>
          <h5 className='text-gradient'>The possibilities are beyond your imagination</h5>
          <p className='p-text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='p-subtext'>Request early access to get started</p>
        </div>
      </div>

      <div className="big_bar mt-5 p-3 d-flex align-items-center rounded-4">
        <div>
        <p className="p-text">Request Early Access to Get Started</p>
        <p className=' text-black small'>Register today & start exploring the endless possiblities.</p>
        </div>
        <button className='bar-btn px-2 bg-black rounded-4  ms-auto'>Get started</button>
      </div>
    </div>
  )
}

export default Features
