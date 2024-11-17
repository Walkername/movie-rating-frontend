import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import './App.css';
import UserPage from './pages/user-page/user-page';
import AddMoviePage from './pages/add-movie-page/add-movie-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/profile" element={<UserPage/>} />
        <Route path="/movie/add" element={<AddMoviePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
