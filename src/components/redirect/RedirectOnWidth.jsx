import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectOnWidth() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth < 1200) {
      navigate('/book');
    }
  }, [navigate]);

  // Render nothing here
  return null;
}

export default RedirectOnWidth;
