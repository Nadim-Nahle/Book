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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<BookList />}>
          
        </Route>
        <Route path = "about" element = {<About />} />
        <Route path = "contact" element = {<ContactForm />} />
        <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path = "/author/:id" element = {<AuthorDetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

