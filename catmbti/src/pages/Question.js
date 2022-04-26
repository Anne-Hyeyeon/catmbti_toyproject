import React from 'react'
import styled from 'styled-components'
import { ProgressBar, Button } from 'react-bootstrap'
import { QuestionData } from '../asset/data/questionData'
import { useNavigate } from 'react-router-dom'


const Question = () => {
    const [questionNo, setQuestionNo] = React.useState(0) 
    const [totalScore, setTotalScore] = React.useState([
        {id: "EI", score: 0 },
        {id: "SN", score: 0 },
        {id: "TF", score: 0 },
        {id: "JP", score: 0 }
    ])
    const navigate = useNavigate()
    console.log('totalScore', setQuestionNo)
    const handleClickButton = (no,type) => {
        const newScore = totalScore.map((s)=>
            s.id === type ? { id:s.id, score: s.score + no } : s
        )
        setTotalScore(newScore)
        // 다음 문제로 문제 수 증가
        if(QuestionData.length !== questionNo +1){
            setQuestionNo(questionNo + 1)
        } else {
            // 결과 페이지로 넘기자 
            navigate('/result')
        }
        console.log("newScore", newScore)
        // if (type === "EI"){
        //     // 기존 스코어에 더할 값을 계산한다. (기존 값+배점)
        //     const addScore = totalScore[0].score + no
        //     // 새로운 객체 
        //     const newObject = {id: "EI", score:addScore}
        //     // splice 통해 새로운 객체를 해당 객체 자리에다가 넣는다.
        //     totalScore.splice(0, 1, newObject)
        // } else if (type === "SN") {
        //     // 기존 스코어에 더할 값을 계산한다. (기존 값+배점)
        //     const addScore = totalScore[1].score + no
        //     // 새로운 객체 
        //     const newObject = {id: "SN", score:addScore}
        //     // splice 통해 새로운 객체를 해당 객체 자리에다가 넣는다.
        //     totalScore.splice(1, 1, newObject)
        // } else if (type === "TF") {
        //     // 기존 스코어에 더할 값을 계산한다. (기존 값+배점)
        //     const addScore = totalScore[2].score + no
        //     // 새로운 객체 
        //     const newObject = {id: "TF", score:addScore}
        //     // splice 통해 새로운 객체를 해당 객체 자리에다가 넣는다.
        //     totalScore.splice(2, 1, newObject)
        // } else if (type === "JP") {
        //     // 기존 스코어에 더할 값을 계산한다. (기존 값+배점)
        //     const addScore = totalScore[3].score + no
        //     // 새로운 객체 
        //     const newObject = {id: "JP", score:addScore}
        //     // splice 통해 새로운 객체를 해당 객체 자리에다가 넣는다.
        //     totalScore.splice(3, 1, newObject)
        // }
    }

    return(
        <Wrapper>
            <ProgressBar striped variant="danger" now={(questionNo/QuestionData.length)*100} style={{ marginTop: '20px' }} />
            <Title>{QuestionData[questionNo].title}</Title>
            <ButtonGroup>
                <Button style={{width:"40%", minHeight:"200px", fontSize: '20pt'}}onClick={() => handleClickButton(1,QuestionData[questionNo].type)}>{QuestionData[questionNo].answera}</Button>
                <Button style={{width:"40%", minHeight:"200px", fontSize: '20pt', marginLeft:"20px"}} onClick={() => handleClickButton(0,QuestionData[questionNo].type)}>{QuestionData[questionNo].answerb}</Button>
            </ButtonGroup>
        </Wrapper>
    )
}

export default Question


const Wrapper = styled.div`
    height : 100vh;
    text-align:center;
    font-family : 'EliceDigitalBaeum-Bd';
`
const Title = styled.div`
    font-size:30pt;
    margin: 50px 0;
`

const ButtonGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
`