import { question } from "./QuestionsSource";
import { useLocation, useNavigate } from "react-router-dom";
import QuizNavigation from "./QuizNavigation";

import "./Question.css";

function QuestionManager() {
  const location = useLocation();

  const questionData : question[] = location.state.questions;
  const navigate = useNavigate();

  const handleSubmit = (userAnswers: number[]) => {
    questionData.forEach((q, index) => {
      questionData[index].userAnswer = userAnswers[index];
    });
    navigate('/result', { state: { questionData } });
  };

  return (
    <div className="main-content">
      <QuizNavigation questions={questionData} onSubmit={handleSubmit} />
    </div>
  ) as JSX.Element;
}

export default QuestionManager;