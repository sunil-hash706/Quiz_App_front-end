import React, { useEffect, useState } from 'react'
import './questionCard.css';

export default function questionCard({ question }) {
    // setQue(question)
    const [color1, setColor1] = useState("white");
    const [color2, setColor2] = useState("white");
    const [color3, setColor3] = useState("white");
    const [color4, setColor4] = useState("white");
    const [correctCount, setCorrectCount] = useState();
    const [wrongCount, setWrongCount] = useState();

    const [id1, setId1] = useState(question._id + '1');
    const [id2, setId2] = useState(question._id + '2');
    const [id3, setId3] = useState(question._id + '3');
    const [id4, setId4] = useState(question._id + '4');

    // setId1(question._id + '1');
    // setId2(question._id + '2');
    // setId3(question._id + '3');
    // setId4(question._id + '4');

    const id1Clicked = (e) => {
        // console.log(id1, id2, id3, id4);
        e.preventDefault();
        setColor1("rgb(255, 0, 0)");
        setWrongCount(wrongCount + 1);
        if (question.optionCorrect === '1') {
            setColor1("rgb(78, 132, 78)");
            setWrongCount(wrongCount - 1);
            setCorrectCount(correctCount + 1);
        }
        if (question.optionCorrect === '2') {
            setColor2("rgb(78, 132, 78)");
        }
        if (question.optionCorrect === '3') {
            setColor3("rgb(78, 132, 78)");
        }
        if (question.optionCorrect === '4') {
            setColor4("rgb(78, 132, 78)");
        }
    }
    const id2Clicked = (e) => {
        e.preventDefault();
        setColor2("rgb(255, 0, 0)");
        setWrongCount(wrongCount + 1);
        if (question.optionCorrect === '1') {
            setColor1("rgb(78, 132, 78)");
        }
        if (question.optionCorrect === '2') {
            setColor2("rgb(78, 132, 78)");
            setWrongCount(wrongCount - 1);
            setCorrectCount(correctCount + 1);
        }
        if (question.optionCorrect === '3') {
            setColor3("rgb(78, 132, 78)");
        }
        if (question.optionCorrect === '4') {
            setColor4("rgb(78, 132, 78)");
        }

    }
    const id3Clicked = (e) => {
        e.preventDefault();
        setColor3("rgb(255, 0, 0)");
        setWrongCount(wrongCount + 1);
        if (question.optionCorrect === '1') {
            setColor1("rgb(78, 132, 78)");
        }
        if (question.optionCorrect === '2') {
            setColor2("rgb(78, 132, 78)");
        }
        if (question.optionCorrect === '3') {
            setColor3("rgb(78, 132, 78)");
            setWrongCount(wrongCount - 1);
            setCorrectCount(correctCount + 1);
        }
        if (question.optionCorrect === '4') {
            setColor4("rgb(78, 132, 78)");
        }

    }
    const id4Clicked = (e) => {
        e.preventDefault();
        setColor4("rgb(255, 0, 0)");
        setWrongCount(wrongCount + 1);
        if (question.optionCorrect === '1') {
            setColor1("rgb(78, 132, 78)");
        }
        if (question.optionCorrect === '2') {
            setColor2("rgb(78, 132, 78)");
        }
        if (question.optionCorrect === '3') {
            setColor3("rgb(78, 132, 78)");
        }
        if (question.optionCorrect === '4') {
            setColor4("rgb(78, 132, 78)");
            setWrongCount(wrongCount - 1);
            setCorrectCount(correctCount + 1);
        }

    }

    useEffect(() => {
        // document.body.style.backgroundColor = color1;
        // console.log(document.getElementById(id1));
        if (document.getElementById(id1) != null)
            document.getElementById(id1).style.backgroundColor = color1;
        if (document.getElementById(id2) != null)
            document.getElementById(id2).style.backgroundColor = color2;
        if (document.getElementById(id3) != null)
            document.getElementById(id3).style.backgroundColor = color3;
        if (document.getElementById(id4) != null)
            document.getElementById(id4).style.backgroundColor = color4;
        console.log(5);
    }, [color1, color2, color3, color4])

    return question != undefined ? (
        < div className='question'>
            <form >

                <h4>Question :- {question.statement}</h4>
                <div className="options">
                    <button id={id1} onClick={id1Clicked}>{question.option1}</button>
                    <button id={id2} onClick={id2Clicked}>{question.option2}</button>
                    <button id={id3} onClick={id3Clicked}>{question.option3}</button>
                    <button id={id4} onClick={id4Clicked}>{question.option4}</button>
                </div>
            </form>
        </div >
    ) :
        (
            < div > No question</div >
        )
}
