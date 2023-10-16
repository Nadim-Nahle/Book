import React from 'react';
import { Link } from 'react-router-dom';
import "./ArtistList.css";

const Artist = ({ item }) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <Link to={`/author/${item.id}`} ><div className='book-item-img'>
        <img src={item.image} alt="cover" />
      </div>
      </Link>
      <div className='book-item-info text-center'>
        <Link to={`/author/${item.id}`} >
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{item.title}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Artist