import { useState } from 'react';
import Question from './Question';
import {question} from './QuestionsSource';
import {Nav, Button, Stack} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';



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
        <>
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
                    variant={isFirstQuestion ? "secondary" : "primary"}
                    onClick={handlePreviousQuestion}
                    disabled={isFirstQuestion}
                    className="col-5 col-sm-2 p-4"
                    >
                    Previous
                </Button>
                <Button 
                    onClick={isLastQuestion ? handleSubmit : handleNextQuestion}
                    variant={isLastQuestion ? "success" : "primary"}
                    className="col-5 col-sm-2 p-4">
                    {isLastQuestion ? 'Submit' : 'Next'}
                </Button>
                <Stack direction="horizontal" gap={3} className="col-sm order-sm-2 justify-content-center flex-wrap p-3">
                    {questionData.map((_ : string, index : number) => (
                        <Button 
                            key={index}
                            variant={currentQuestion === index ? "primary" : "outline-primary"}
                            onClick={() => setCurrentQuestion(index)}
                            >
                            {index + 1}
                        </Button>
                    ))}
                </Stack>
        </Nav>
    </>
    ) as JSX.Element;
}

export default QuestionManager;