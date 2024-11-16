import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import './App.css';
import UserPage from './pages/user-page/user-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/profile" element={<UserPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
