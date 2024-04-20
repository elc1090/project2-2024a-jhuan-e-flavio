import { useState } from 'react';
import Question from './Question';
import {question} from './QuestionsSource';


interface Props {
    questionData : question[];
}

function QuestionManager({questionData} : Props) {
    const leng = questionData.length;
    const correctAnswers = questionData.map((question) => question.correct);

    let userAnswers = new Array(leng).fill(-1);

    const handleAnswerChange = (index: number, value: number) => {
        console.log(index, value);
        userAnswers[index] = value;
    }

    console.log(questionData);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const handleNextQuestion = () => {
        if (currentQuestion === leng - 1) return
        setCurrentQuestion(currentQuestion + 1);
    }

    const handlePreviousQuestion = () => {
        if (currentQuestion === 0) return
        setCurrentQuestion(currentQuestion - 1);
    }

    return (
        <>
        <ul>
            {questionData.map((question, index) => (
                <li key = {index}
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

        <nav className="d-flex justify-content-around">
        <button onClick={handlePreviousQuestion}>
            Previous
        </button>
            <ul className="d-flex w-25 justify-content-around">
                {questionData.map((_, index) => (
                    <li>
                        <button onClick={() => setCurrentQuestion(index)}>
                            {index + 1}
                        </button>
                    </li>
                ))}
            </ul>
        <button onClick={handleNextQuestion}>
            Next
        </button>
        </nav>
        

        
    </>
    )
}

export default QuestionManager;