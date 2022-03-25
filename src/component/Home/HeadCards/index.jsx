import React from 'react'
import { Container } from './style'

export const HeadCharts = () => {
    return (
        <Container>
            <Container.Cards>
                <Container.Titl>회원수</Container.Titl>
                <Container.Sum>3000</Container.Sum>
                <Container.Titl>현재 : 1,000</Container.Titl>
                <Container.Titl>탈퇴 : 124</Container.Titl>
            </Container.Cards>
            {/* 2 */}
            <Container.Cards>
                <Container.Titl>금일 방문자수</Container.Titl>
                <Container.Sum>3000</Container.Sum>
                <Container.Titl>전주대비 10.26% </Container.Titl>
            </Container.Cards>
            {/* 3 */}
            <Container.Cards>
                <Container.Titl>회원수</Container.Titl>
                <Container.Sum>3000</Container.Sum>
                <Container.Titl>전일대비 200 AKD</Container.Titl>
            </Container.Cards>
            {/* 4 */}
            <Container.Cards>
                <Container.Titl>회원수</Container.Titl>
                <Container.Sum>3000</Container.Sum>
                <Container.Titl>현재 : 1,000</Container.Titl>
                <Container.Titl>탈퇴 : 124</Container.Titl>
            </Container.Cards>


        </Container>
    )
}
export default HeadCharts