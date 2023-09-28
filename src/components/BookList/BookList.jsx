import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import bookes from "../../books.json";
import Navbar from '../Navbar/Navbar';

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = (book) => {
  const { resultTitle } = useGlobalContext();
  return (
    <>
      <Navbar />
      <section className='booklist'>
        <div className='container'>
          <div className='section-title'>
            <h2>{resultTitle}</h2>
          </div>
          <div className='booklist-content grid'>
            {
              bookes.map((item) => {
                return (
                  <Book item={item} key={item.id} />
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default BookList