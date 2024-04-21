import { question } from "./QuestionsSource";
import { useLocation } from "react-router-dom";

import QuizzNavigation from "./QuizzNavigation";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./Question.css";

function QuestionManager() {
  const location = useLocation();

  const questionData = location.state.questions;
  const correctAnswers: number[] = questionData.map(
    (question: question) => question.correct
  );

  const handleSubmit = (userAnswers: number[]) => {
    console.log(userAnswers);
    console.log(correctAnswers);
    alert(
      `You got ${
        userAnswers.filter((ans, index) => ans === correctAnswers[index]).length
      } correct answers`
    );
  };

  return (
    <div className="main-content">
      <QuizzNavigation questions={questionData} onSubmit={handleSubmit} />
    </div>
  ) as JSX.Element;
}

export default QuestionManager;