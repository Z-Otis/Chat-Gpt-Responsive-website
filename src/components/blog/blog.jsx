import React from 'react'
import './blog.css'
import blogOne from '../../assets/blog-1.png'
import blogTwo from '../../assets/blog-2.png'
import blogThree from '../../assets/blog-3.png'
import blogFour from '../../assets/blog-4.png'
import blogFive from '../../assets/blog-5.png'


const Blog = () => {
  return (
    <div className='container mt-5'>
     <h3 className='text-gradient'>A lot is happening,</h3>
     <h3  className='text-gradient'> we are blogging about it</h3>
     <div className="row g-3">
      <div className='col-md-4 col-sm-12'>
      <div className="card" >
  <img src={blogFive} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-title">sep 22, 2022</p>
    <p className="card-text text-white">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
     
     
     
      <div className='col-md-4 col-sm-12'>
      <div className="card mb-3" >
  <img src={blogTwo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-title">sep 22, 2022</p>
    <p className="card-text text-white">GPT-3 and Open  AI is the future. Let us exlore how it is? </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card" >
  <img src={blogThree} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-title">sep 22, 2022</p>
    <p className="card-text text-white">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
     
     
     
      <div className='col-md-4 col-sm-12 '>
      <div className="card mb-3" >
  <img src={blogFour} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-title">sep 22, 2022</p>
    <p className="card-text text-white">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      <div className="card" >
  <img src={blogOne} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-title">sep 22, 2022</p>
    <p className="card-text text-white">GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
</div>
</div>
    
  )
}

export default Blog
