import React from "react"
import Quiz from "./Quiz"
import Top from "./images/topblob.png"
import Bottom from "./images/bottomblob.png"

export default function App(){
    const [quiz, setQuiz] = React.useState(false)
    return (
        <main>
            {
                quiz ?
                    <Quiz />
                    :
                    <div className="startPage">
                        <img src={Top} alt="" className="topBlob" />
                        <div className="startInfo">
                            <h1>Quizzical</h1>
                            <h3>Check your general knowledge</h3>
                            <button onClick={() => setQuiz(true)} className="startButton">Start Quiz</button>
                        </div>
                        <img src={Bottom} alt="" className="bottomBlob" />
                    </div>
            }
        </main>
    )
}