import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = ({item}) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {item.image} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${item.id}`} >
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{item.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{item.author}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Genre: </span>
          <span>{item.type}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{item.year}</span>
        </div>
      </div>
    </div>
  )
}

export default Book