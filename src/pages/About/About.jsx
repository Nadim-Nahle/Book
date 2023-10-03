import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Navbar from '../../components/Navbar/Navbar';

const About = () => {
  return (
    <>
    <Navbar ></Navbar>
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='blue'>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1 blue'>About Soha Agency</h2>
            <p className='header-text fs-18 fw-6'>Soha Agency is an agency specialized in Arabic Literary Arts. Its goal is to promote Arabic
            literature as well as its artistic creations throughout the world.</p>
          <p className='header-text fs-18 fw-6'>How was this idea originated?</p>
          <p className='header-text fs-18 fw-6'>As I grew up in Lebanon, then migrated to France and later to England to study and work
            there, an incredible thing happened to me: I was projected towards the International but
            also brought back towards my culture. In which way? As a doctoral graduate and professor
            of literature for twenty years, I understood that the cultural identity of each country is
            deeply linked to its literary arts.</p>
          <p className='header-text fs-18 fw-6'>Afterwards, I returned to Lebanon to work in the field of Arabic publishing for a position as
            an editor and the head of foreign rights at Dar Altanweer. I have discovered a literary wealth
            that is still little known. The Arab Publishing World, open to international literary
            production, invests enormously in the purchase of foreign rights but little in the exhibition
            of Arabic literature abroad. Some works escape, but many others still wait in silence.</p>
          <p className='header-text fs-18 fw-6'>So, a mission seemed necessary to me: to promote Arab literary arts which still seem to
            have little international exposure, to create a sort of silk road.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
