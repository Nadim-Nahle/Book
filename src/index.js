import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import ContactForm from './pages/Contact/Contact';
import AuthorDetails from './components/AuthorDetails/AuthorDetails';
import ArtistList from './components/ArtistList/ArtistList';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="book" element={<BookList />} />
        <Route path="artist" element={<ArtistList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/author/:id" element={<AuthorDetails />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

