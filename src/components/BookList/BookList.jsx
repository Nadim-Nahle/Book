import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import bookes from "../../books.json";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = (book) => {
  const {books, loading, resultTitle} = useGlobalContext();
  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            bookes.map((item) => {
              return (
                <Book item={item}/>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList