import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import gptImg from '../../assets/GPT-3.png';
import './header.css'



const Header = () => {
  return (
    <div className='text-light'>
       <Navbar expand="lg" className="bg-transparent shadow-lg navbar-dark">
      <Container className='nav-container'>
        <Navbar.Brand href="#home"><img src={gptImg} alt="" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='shadow-none border-0' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto ms-auto'>
          
          <Nav.Link href="#home" >Home</Nav.Link>



          <Nav.Link href="#what-is-gpt">What is GPT?</Nav.Link>
          <Nav.Link href="#Open-ai">Open Ai</Nav.Link>
          <Nav.Link href="#case-studies">Case studies</Nav.Link>
          </Nav>
            <div className='d-flex justify-content-start align-items-center gap-2' >
         <a href="#signin" className='text-white' >Signin</a>
        <button className='text-white btns border-0 py-1 px-3'> <a href="#signin" >Signup</a></button>
     
            </div>
            
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
