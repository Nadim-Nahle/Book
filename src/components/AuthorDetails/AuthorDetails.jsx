import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./AuthorDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import artists from "../../artist.json";
import Navbar from '../Navbar/Navbar';

const AuthorDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [artist, setArtist] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    setLoading(true);
    async function getAuthorDetails() {
      try {
        const data = artists[id-1];
        console.log(data);

        if (data) {
          const { details: details, title, subject_places, subject_times, subjects, image } = data;
          const newAuthor = {
            title: title,
            details: details,
            image: image ? image : coverImg
          };

          setArtist(newAuthor);
        } else {
          setArtist(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getAuthorDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (

    <>
      <Navbar />

      <section className='book-details'>
        <div className='container'>
          <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/artist")}>
            <FaArrowLeft size={22} />
            <span className='fs-18 fw-6'>Go Back</span>
          </button>

          <div className='book-details-content grid'>
            <div className='book-details-img'>
              <img src={artist?.image} alt="cover img" />
            </div>
            <div className='book-details-info'>
              <div className='book-details-item title'>
                <span className='fw-6 fs-24'>{artist?.title}</span>
              </div>
              <div className='book-details-item description'>
                <span>{(artist?.details?.replace(/&quot;/g, '"').split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                )))}
                </span>
              </div>
            </div>
            {
              id == 2 ?
            <Link to={`/gallery`}>
            <div className='art-btn'>Click here to check his art collection</div>
            </Link>
            :
            null
              }
          </div>       
        </div>
      </section>
    </>
  )
}


export default AuthorDetails