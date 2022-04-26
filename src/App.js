import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import movies from './movies'
import Navbar from './components/Navbar';
import Moviedisplay from './components/Moviedisplay';


const App = () => {

  const [allmovies, setAllmovies] = useState([])

  useEffect(() => {
    let url = 'https://wookie.codesubmit.io/movies'
    const defaultOptions = {
      headers: {
        'Authorization': 'Bearer Wookie2019',
      },
    };
    fetch(url, defaultOptions
    ).then((response) => {
      return response.json();
    }).then((data) => {
      setAllmovies(data.movies)
      // console.log(data.movies);
    })
  }, [])

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <Navbar />
        <Moviedisplay movies={allmovies} />
      </div>
    </div>
  );
};

export default App;