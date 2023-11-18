// import './JobCard.css';
import { useEffect, useState } from "react";
import QuestionCard from "./questionCard";
const dotenv = require("dotenv");
dotenv.config();
export default function alQuestions() {

    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        getQuestion();
    }, []);

    const [cnt, setCnt] = useState(1)

    const getQuestion = async () => {
        let result = await fetch(process.env.URL+"/questions");
        result = await result.json();
        setQuestions(result);
    };

    return questions.length ? questions.map((item) => (
        <>
            <QuestionCard question={item}></QuestionCard>
        </>
    )) :
        (
            <>
                <h2>No Questions Added, Please go to add new question and add a question </h2 >
            </>
        )
        ;
}