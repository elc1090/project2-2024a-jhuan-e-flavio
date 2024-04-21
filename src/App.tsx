// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Question from './components/Questions/Question';
import QuestionManager from './components/Questions/QuestionManager';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/question' element={<QuestionManager />} />
      </Routes>
    </BrowserRouter>
  );
}export default App;
