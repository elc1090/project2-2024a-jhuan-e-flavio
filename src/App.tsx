import { ReactNode, useEffect, useRef, useState } from "react";
import React from "react";

import QuestionManager from "./components/QuestionManager";
import {getQuestionsData, question} from "./components/QuestionsSource";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [questions, setQuestions] = useState<question[]>([]);


  // TODO : Evitar que seja chamado sempre que o componente atualiza
  useEffect(() => {
    const fetchData = async () => {

      const data = await getQuestionsData();
      setQuestions(data);
    }
    fetchData();
  }
  , []);


  return (
    <div>
      <QuestionManager 
        questionData={questions}
      />

    </div>
  );
}

export default App;
