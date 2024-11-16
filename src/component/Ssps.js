import React from 'react';
// import paperImage from './images/paper.jpg'
import '../App.css';
export default function Ssps() {
  return (
    <>
        <h1 id="header">WELCOME TO SPS GAME!</h1>
        <div className="choices">
            <div className="choice" id="paper">
                <img src="./images/paper.jpg" alt=''/>
            </div>
            <div className="choice" id="scissor">
                <img src="./images/scissor.jpg" alt=''/>
            </div>
            <div className="choice" id="rock">
                <img src="./images/stone1.jpg" alt=''/>
            </div>
        </div>
        <div className="score-b">
            <div className="score">
                <p id="myscore" >0</p>
                <p className="scoremsg">Your Score</p>
            </div>
            <div className="score">
                <p id="cscore">0</p>
                <p className="scoremsg">Comp Score</p>
            </div>
        </div>
        <div className="msgcnt">
        <p id="msg">Now Play Your Move</p>
        </div>
        <img src="./images/paper.jpg" classNamne="img-fluid" alt="" />
        <script src="script.js"></script>
    </>
  )
}
