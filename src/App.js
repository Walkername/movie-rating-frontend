import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import './App.css';
import UserPage from './pages/user-page/user-page';
import AddMoviePage from './pages/add-movie-page/add-movie-page';
import MoviePage from './pages/movie-page/movie-page';

function App({movies}) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage movies={movies}/>} />
        <Route path="/profile" element={<UserPage/>} />
        <Route path="/movies/add" element={<AddMoviePage/>}/>
        <Route path="/movies/:id" element={<MoviePage movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
