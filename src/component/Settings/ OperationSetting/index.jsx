import React from 'react'
import { Table } from 'react-bootstrap'
import styled from 'styled-components'

export const Settings = () => {
    return (
        <Container><Wrapper>

            <TableBar>
                <Border />
                <Table responsive="sm">

                    <thead>
                        <tr>
                            <th>수수료 적요 (%)</th>
                            <th>회원 설정 범위</th>
                            <th>지급 기준</th>
                            <th>지급주기</th>
                        </tr>

                    </thead>
                    <tbody>


                        <tr>
                            <td><input type="text" placeholder='2.5' /></td>
                            <td><input type="text" placeholder='20' /></td>
                            <td><input type="text" placeholder='25 AKG' /></td>
                            <td><input type="text" placeholder='1 wek' /></td>
                        </tr>
                    </tbody>
                </Table>
            </TableBar>
            <Bordertop />
        </Wrapper>


            <Cards>
                {/* 1 */}

                <Left>
                    <ItemCard>
                        <ItemWrapper>
                            레퍼럴 회원 설정 범위 (%)
                        </ItemWrapper>
                        <input type="text" placeholder='0' />
                        <ButtonItem>
                            <button className='cancel' >취소</button>
                            <button className='ok' >확인</button>
                        </ButtonItem>
                    </ItemCard>
                    {/* 2 */}
                    <ItemCard>
                        <ItemWrapper>
                            레퍼럴 지급 기준 (1건당 AKG이상)
                        </ItemWrapper>
                        <input type="text" placeholder='0' />
                        <ButtonItem>
                            <button className='cancel' >취소</button>
                            <button className='ok' >확인</button>
                        </ButtonItem>
                    </ItemCard>
                </Left>
            </Cards>
            {/* 3 */}
            <Cards>
                <ItemCard left>
                    <ItemWrapper>
                        레퍼럴 지급주기 (week마다)
                    </ItemWrapper>
                    <input type="text" placeholder='0' />
                    <ButtonItem>
                        <button className='cancel' >취소</button>
                        <button className='ok' >확인</button>
                    </ButtonItem>
                </ItemCard>
            </Cards>
        </Container>
    )
}
const Left = styled.div`
display: flex;
margin-left: auto;
`

const ButtonItem = styled.div`
display: flex;
margin-top: 24px;
.cancel{
  margin-right: 20px;
width: 210px;
height: 44px;
background: #F1F2F4;
border-radius: 8px;
}

.ok{
width: 210px;
height: 44px;
background: #4876EF;
border-radius: 8px;
}
`

const ItemWrapper = styled.div`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
`
const ItemCard = styled.div`
margin-left: ${({ left }) => left ? 'auto' : '44px'};
padding: 37px 50px;
width: 540px;
height: 270px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
border-radius: 12px;
margin-top: 37px;
input{
  padding-left: 20px;
  margin-top: 44px;
width: 440px;
height: 38px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
}
`
const Cards = styled.div`
display: flex;
width: 100%;

`
const Container = styled.div`
margin: 44px 0 0 0;
display: flex;
flex-direction: column;
`
const TableBar = styled.div`
width: 100%;
`

const Wrapper = styled.div`
padding:34px 50px;
width: 1526px;
height: 257px;
left: 274px;
top: 108px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 12px;

thead{

background: #F1F2F4;
}
input{
  padding-left: 20px;
width: 210px;
height: 38px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 8px;
}
`
const Border = styled.div`
border: 1px solid #D9D9D9;
`

const Bordertop = styled.div`
border: 1px solid #D9D9D9;
margin-top: 22px;
`
export default Settings