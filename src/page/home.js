import React from 'react';
import { Link } from 'react-router-dom';
import AutoPlay from '../component/autoPlay';
import img2 from '../image/competition.png'
import img1 from '../image/team.png'
import img3 from '../image/price.png'
import '../css/home.css'

const Home = () => {
  return( 
  <>
  <div className='container'>
      <div className='row'>
        <div className='col-md-5 col-sm-12'>
          <img className='home-img1' src={img1} style={{width: "35rem", marginTop: "8rem"}} />
        </div>
        <div className='col-md-7 col-sm-12'>
          <p className='home-right1-title'>Enigma Official Technical Club Of BBDEC</p>
          <p className='home-right1-body'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div style={{textAlign: "center"}}>
          <Link to="/register" className="home-link-btn" style={{textDecoration: "none"}}><button className='home-register-btn' type="button" href="/register"> Register Now</button></Link>
          </div>
        </div>
        <div className='col-md-7'>
          <p className='home-left2-title'>Upcoming Competition</p>
          <p className='home-left2-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div style={{textAlign: "center"}}>
            <button className='event-btn' type="button" >Register for Events</button>
          </div>
        </div>
        <div className='col-md-5'>
          <img className='home-img1' src={img2} style={{width: "30rem",marginTop: "6rem"}} />
        </div>
        <AutoPlay />
        <div className='col-md-5'>
          <img className='home-img1' src={img3} style={{width: "30rem", marginTop: "6rem"}} />
        </div>
        <div className='col-md-7'>
          <p className='home-right3-title'>Prize Money</p>
          <p className='home-right3-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
  </div>
  </>
  )
};

export default Home;
