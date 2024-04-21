import { useState } from 'react';
import Question from './Question';
import {question} from './QuestionsSource';
import {Nav, Button, Stack} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import "./Question.css";



function QuestionManager() {
    const location = useLocation();

    const questionData = location.state.questions;
    const leng = questionData.length;
    const correctAnswers: number[] = questionData.map((question: question) => question.correct);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswer] = useState(new Array(leng).fill(-1));

    const handleAnswerChange = (index: number, value: number) => {
        let a = userAnswers.slice();
        a[index] = value
        setUserAnswer(a);
    }

    const handleNextQuestion = () => {
        if (currentQuestion === leng - 1) return
        setCurrentQuestion(currentQuestion + 1);
    }

    const handlePreviousQuestion = () => {
        if (currentQuestion === 0) return
        setCurrentQuestion(currentQuestion - 1);
    }

    const handleSubmit = () => {
        console.log(userAnswers);
        console.log(correctAnswers);
        alert(`You got ${userAnswers.filter((ans, index) => ans === correctAnswers[index]).length} correct answers`);
    }

    const isLastQuestion = currentQuestion === leng - 1;
    const isFirstQuestion = currentQuestion === 0;

    return (
        <div className="main-content">
        <ul>
            {questionData.map((question: question, index: number) => (
                <li key={index}
                    style={{
                    display: currentQuestion === index ? 'block' : 'none'
                }}>
                    <Question
                        title={question.title}
                        options={question.options}
                        onSetOption={(op: number) => handleAnswerChange(index, op)}
                        />
                </li>
            ))}
        </ul>

        <Nav className="align-items-center row d-flex flex-wrap justify-content-around m-3 gap-3">
                <Button 
                    onClick={handlePreviousQuestion}
                    disabled={isFirstQuestion}
                    className="col-5 col-sm-2 p-4 question_button"
                    >
                    Previous
                </Button>
                <Button 
                    onClick={isLastQuestion ? handleSubmit : handleNextQuestion}
                    className="col-5 col-sm-2 p-4 question_button">
                    {isLastQuestion ? 'Submit' : 'Next'}
                </Button>
                <Stack direction="horizontal" gap={3} className="col-sm order-sm-2 justify-content-center flex-wrap p-3">
                    {questionData.map((_ : string, index : number) => (
                        <Button 
                            key={index}
                            onClick={() => setCurrentQuestion(index)}
                            className={
                                "question_button" +
                                (index === currentQuestion ? " question_active" : "")
                            }
                            >
                            {index + 1}
                        </Button>
                    ))}
                </Stack>
        </Nav>
    </div>
    ) as JSX.Element;
}

export default QuestionManager;