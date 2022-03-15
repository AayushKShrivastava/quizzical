import React from "react"
import Top from "./images/topblob.png"
import Bottom from "./images/bottomblob.png"
import { nanoid } from 'nanoid'
import Question from "./Question"

export default function Quiz(){
    const [questions, setQuestions] = React.useState([])
    const [score, setScore] = React.useState(false)
    const [marks, setMarks] = React.useState(0)
    const [reset, setReset] = React.useState(false)
    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data.results.map(question => ({
                id: nanoid(),
                question: question.question,
                correct: question.correct_answer,
                incorrect: question.incorrect_answers,
                selected: ""
            }))))
    }, [reset])
    console.log(questions)

    function handleSelection(option, id){
        if(score === false){
            setQuestions(prevquestions => prevquestions.map(question => {
                if(question.id === id){
                    return (
                        {
                            ...question,
                            selected: option
                        }
                    )
                }
                else{
                    return {...question}
                }
            }))
        }
    }

    function checkAnswers(){
        setScore(true)
        questions.forEach(question => {
            if(question.selected === question.correct)
                setMarks(prevMarks => prevMarks+1)
        })
    }

    function playAgain(){
        setReset(prevState => !prevState)
        setScore(false)
        setMarks(0)
    }

    const displayQuestions = questions.map(question => {
        return (
            <Question 
                key={question.id}
                id={question.id}
                question={question.question}
                correct={question.correct}
                incorrect={question.incorrect}
                selected={question.selected}
                selection={handleSelection}
                result={score}
            />
        )
    })
    return (
        <div className="quizPage">
            <img src={Top} alt="" className="topBlob" />
            {displayQuestions}
            {
                score ?
                <div className="result">
                    <h2>You scored {marks}/5 correct answers</h2>
                    <button className="playAgain" onClick={playAgain}>Play Again</button>
                </div> 
                :
                <button className="checkAnswer" onClick={checkAnswers}>Check Answers</button>
            }
            <img src={Bottom} alt="" className="bottomBlob" />
        </div>
    )
}