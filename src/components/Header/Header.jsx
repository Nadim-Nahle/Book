import React from 'react';
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import RedirectOnWidth from '../redirect/RedirectOnWidth';

const Header = () => {
  return (
    <>
    <RedirectOnWidth />
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <section class="top">
          <div class="title">
            <h3>Welcome to</h3>
            <h1>Soha Agency</h1>
          </div>
        </section>
        <section class="page">
          <div class="parallax1"></div>
          <div class="paragraph first">
            <p><span>S</span>oha Agency is an agency specialized in Arabic Literary Arts. Its goal is to promote Arabic
              literature as well as its artistic creations throughout the world.
            </p><p>How was this idea originated?</p><p> As I grew up in Lebanon, then migrated to France and later to England to study and work
              there, an incredible thing happened to me: I was projected towards the International but
              also brought back towards my culture. In which way? As a doctoral graduate and professor
              of literature for twenty years, I understood that the cultural identity of each country is
              deeply linked to its literary arts.</p>
            <p>Afterwards, I returned to Lebanon to work in the field of Arabic publishing for a position as
              an editor and the head of foreign rights at Dar Altanweer. I have discovered a literary wealth
              that is still little known. The Arab Publishing World, open to international literary
              production, invests enormously in the purchase of foreign rights but little in the exhibition
              of Arabic literature abroad. Some works escape, but many others still wait in silence.</p>
            <p>So, a mission seemed necessary to me: to promote Arab literary arts which still seem to
              have little international exposure, to create a sort of silk road.</p>
          </div>

        </section>
      </header>
    </div>
    </>
  )
}

export default Header