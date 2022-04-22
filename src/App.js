import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Actionmovielist from './components/Actionmovielist';
import Crimemovielist from './components/Crimemovielist';
import Dramamovielist from './components/Dramamovielist';

const App = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);

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
      filterMovies(data.movies)
      console.log(data.movies);
    })
  }, [])

  const filterMovies = (movies) => {
    let actionMoviesList = []
    let crimeMoviesList = []
    let dramaMoviesList = []
    movies.map((movie, index) => {
      movie.genres.includes("Action") ? actionMoviesList.push(movie) : movie.genres.includes("Crime") ? crimeMoviesList.push(movie) : dramaMoviesList.push(movie)
    })
    setActionMovies(actionMoviesList)
    setCrimeMovies(crimeMoviesList)
    setDramaMovies(dramaMoviesList)
  }


  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <Navbar />
        <Actionmovielist movies={actionMovies} />
        <Crimemovielist movies={crimeMovies} />
        <Dramamovielist movies={dramaMovies} />
      </div>
    </div>
  );
};

export default App;