import { ReactNode, useEffect, useRef, useState } from "react";
import React from "react";

import QuestionManager from "./components/QuestionManager";
import {getQuestionsData, question} from "./components/QuestionsSource";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

function App() {

  const [questions, setQuestions] = useState<question[]>([]);
  const [loaded, setLoaded] = useState(false);

  const trigQuestions = () => {
    getQuestionsData().then((data) => {
      setQuestions(data);
      setLoaded(true);
    });
  }

  if (loaded){
    return (
      <QuestionManager questionData={questions} />
    );
  }

  return (
    <div>
      <Button 
      variant="primary"
      onClick={trigQuestions}>
        <h1>Fetch Question</h1>
      </Button>
    </div>
  );
}

export default App;
