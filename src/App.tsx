// App.jsx
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import QuestionManager from './components/Questions/QuestionManager';
import QuizResult from './components/Questions/QuizResult';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <HashRouter> 
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/question' element={<QuestionManager />} />
        <Route path='/result' element={<QuizResult />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </HashRouter>
  );
}export default App;
