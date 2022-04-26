import React from 'react'
import styled from 'styled-components'
import CatImage from '../asset/cat_image.jpg'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ResultData } from '../asset/data/resultdata'


const Result = () => {
    const navigate = useNavigate()
    return(
        <Wrapper>
        <Header>예비집사 판별기</Header>
        <Contents>
            <Title>결과 보기</Title>
            <LogoImage>
            <img src={ResultData[0].image} className="rounded-circle" width={350} height={350} />
            </LogoImage>
            <Desc>예비 집사님과 찰떡궁합인 고양이는 {ResultData[0].name}입니다.</Desc>
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