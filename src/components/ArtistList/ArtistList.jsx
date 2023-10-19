import React from 'react';
import artists from "../../artist.json";
import Navbar from '../Navbar/Navbar';
import Artist from './Artist';

//https://covers.openlibrary.org/b/id/240727-S.jpg

const ArtistList = (book) => {
  return (
    <>
      <Navbar />
      <section className='booklist'>
        <div className='container'>
          <div className='section-title'>
            <h2>Artists</h2>
          </div>
          <div className='booklist-content grid'>
            {
              artists.map((item) => {
                return (
                  <Artist item={item} key={item.id} />
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default ArtistList