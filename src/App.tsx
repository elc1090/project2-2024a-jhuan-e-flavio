// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import QuestionManager from './components/Questions/QuestionManager';
import QuizResult from './components/Questions/QuizResult';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/question' element={<QuestionManager />} />
        <Route path='/result' element={<QuizResult />} />
      </Routes>
    </BrowserRouter>
  );
}export default App;
