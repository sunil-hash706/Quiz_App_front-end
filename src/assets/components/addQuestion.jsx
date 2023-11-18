import React, { useState } from 'react'
import './addQuestion.css';
import dotenv from  "dotenv";
dotenv.config();
export default function addQuestion() {
    const [statement, setStatement] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [option5, setOption5] = useState('');
    const [option6, setOption6] = useState('');
    const [option7, setOption7] = useState('');
    const [option8, setOption8] = useState('');
    const [option9, setOption9] = useState('');
    const [option10, setOption10] = useState('');
    const [optionCorrect, setOptionCorrect] = useState('');
    const [subjectCode, setSubjectCode] = useState('');


    const addQuestion = async () => {
        if (statement === '' || option1 === '' || option2 === '' || optionCorrect === '' || optionCorrect === '') {
            alert("Add required data");
        }
        else {
            // console.log(statement, option1, option2, option3, option4, optionCorrect);
            let result = await fetch(process.env.URL + "/add-question", {
                method: "post",
                body: JSON.stringify({ statement, option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, optionCorrect, subjectCode }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // result = await result.json();
            // navigate("/home");
        }
    };

    return (
        <div>
            <form className='question'>
                <h2>Add New Question</h2>
                <textarea className="statement" value={statement} onChange={(e) => { setStatement(e.target.value) }} placeholder='Write question here' />
                <input type="text" value={option1} onChange={(e) => { setOption1(e.target.value) }} placeholder='Option1' />
                <input type="text" value={option2} onChange={(e) => { setOption2(e.target.value) }} placeholder='Option2' />
                <input type="text" value={option3} onChange={(e) => { setOption3(e.target.value) }} placeholder='Option3' />
                <input type="text" value={option4} onChange={(e) => { setOption4(e.target.value) }} placeholder='Option4' />
                {/* <input type="text" value={option5} onChange={(e) => { setOption5(e.target.value) }} placeholder='Option5' /> */}
                {/* <input type="text" value={option6} onChange={(e) => { setOption6(e.target.value) }} placeholder='Option6' /> */}
                {/* <input type="text" value={option7} onChange={(e) => { setOption7(e.target.value) }} placeholder='Option7' /> */}
                {/* <input type="text" value={option8} onChange={(e) => { setOption8(e.target.value) }} placeholder='Option8' /> */}
                {/* <input type="text" value={option9} onChange={(e) => { setOption9(e.target.value) }} placeholder='Option9' /> */}
                {/* <input type="text" value={option10} onChange={(e) => { setOption10(e.target.value) }} placeholder='Option10' /> */}
                <input type="number" value={optionCorrect} onChange={(e) => { setOptionCorrect(e.target.value) }} placeholder='Correct Option integer number from 1 - 10' />
                <input type="text" value={subjectCode} onChange={(e) => { setSubjectCode(e.target.value) }} placeholder='Subject Code' />
                <button onClick={addQuestion}>SUBMIT</button>
            </form>
        </div>
    )
}
