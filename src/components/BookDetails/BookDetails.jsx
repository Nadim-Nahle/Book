import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import books from "../../books.json";
import Navbar from '../Navbar/Navbar';

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const data = books[id - 1];
        console.log(data);
        if (data) {
          const { details: description, title, image: covers, subject_places, subject_times, subjects } = data;
          console.log(covers, 'a')
          const newBook = {
            description: description ? description : "No description found",
            title: title,
            cover_img: covers ? covers : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (

    <>
      <Navbar />

      <section className='book-details'>
        <div className='container'>
          <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
            <FaArrowLeft size={22} />
            <span className='fs-18 fw-6'>Go Back</span>
          </button>

          <div className='book-details-content grid'>
            <div className='book-details-img'>
              <img src={book?.cover_img} alt="cover img" />
            </div>
            <div className='book-details-info'>
              <div className='book-details-item title'>
                <span className='fw-6 fs-24'>{book?.title}</span>
              </div>
              <div className='book-details-item description'>
                <span>{(book?.description?.replace(/&quot;/g, '"').split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                )))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BookDetails