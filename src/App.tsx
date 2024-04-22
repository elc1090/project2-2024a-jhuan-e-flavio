// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import QuestionManager from './components/Questions/QuestionManager';
import QuizResult from './components/Questions/QuizResult';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/elc1090/project2-2024a-jhuan-e-flavio' element={<Home />} />
        <Route path='/question' element={<QuestionManager />} />
        <Route path='/result' element={<QuizResult />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}export default App;
