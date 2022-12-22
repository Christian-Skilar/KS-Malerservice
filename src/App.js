import React, { useState, useEffect } from 'react';
import SkewLoader from "react-spinners/SkewLoader";
import Navigation from './components/Navigation';
import { Header, About, Contact } from './components/pages';
import './App.css';

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
          {loading ? (
        <div className='loading'>
          <SkewLoader color="#0072BC" />
        </div>
      ) : (
        <div>
          <Navigation />
          <Header />
          <About />
          <Contact />
        </div>
      )}
    </div>

    );
  }

export default App;