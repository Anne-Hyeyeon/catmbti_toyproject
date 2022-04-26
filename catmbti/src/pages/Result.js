import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ResultData } from '../asset/data/resultdata'


const Result = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const mbti = searchParams.get('mbti')
    const [resultdata,setResultData] = React.useState({})
    React.useEffect(()=>{
        const result = ResultData.find((s)=>s.best === mbti)
        setResultData(result)
    },[mbti])
    console.log(resultdata)
    return(
        <Wrapper>
        <Header>예비집사 판별기</Header>
        <Contents>
            <Title>결과 보기</Title>
            <LogoImage>
            <img src={resultdata.image} className="rounded-circle" width={350} height={350} />
            </LogoImage>
            <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultdata.name}입니다.</Desc>
            <Desc2>예비 집사님과 찰떡궁합인 고양이는 {resultdata.desc}</Desc2>
            <Button onClick={()=>navigate('/')} style={{ fontFamily :'EliceDigitalBaeum-Bd', marginTop :'20px' }}>테스트 다시하기</Button>
        </Contents>
    </Wrapper>
    )
}

export default Result

const Wrapper = styled.div`
    height : 100vh;
    font-family : 'EliceDigitalBaeum-Bd';
`


const Contents = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const Header = styled.div`
    font-size: 40pt;
    display:flex;
    justify-content:center;
    align-items:cetner;
`

const Title = styled.div`
    font-size: 30pt;
    margin-top: 40px;
`

const LogoImage = styled.div`
    margin-top: 10px;
`

const Desc = styled.div`
    font-size: 20pt;
    margin-top: 20px;
`

const Desc2 = styled.div`
    font-size: 15pt;
    margin: 20px 20px;
`