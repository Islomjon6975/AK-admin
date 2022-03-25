import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Restart } from '../../../assets/icons/restart.svg'
export const CreateApair = () => {


    return (
        <Container>
            <Card>
                <CardWrapper>
                    <h1>Create a pair
                        <Icon><Restart /> </Icon></h1>
                    <Border />
                </CardWrapper>

                <CardBody>
                    <p>Balance 0.000000
                    </p>
                    <CaardWrap>
                        <select >
                            <option >USTD</option>
                            <option value="1">USTD</option>
                            <option value="2">BUSD</option>
                        </select>
                        <input placeholder='0.0' type='text' />
                        <button >MAX</button>
                    </CaardWrap>

                </CardBody>


                <CardBody>
                    <p>Balance 0.000000
                    </p>
                    <CaardWrap>
                        <select>
                            <option >USTD</option>
                            <option value="1">USTD</option>
                            <option value="2">BUSD</option>
                        </select>
                        <input placeholder='0.0' type='text' />
                        <button>MAX</button>
                    </CaardWrap>


                    <PayCard>
                        <PayContainer>
                            <PayCardWraqq>페어명</PayCardWraqq>
                            <PayCardWraqq>페어 심볼명</PayCardWraqq>
                            <PayCardWraqq>초기 교환 비율</PayCardWraqq>
                            <PayCardWraqq>수수료</PayCardWraqq>
                        </PayContainer>
                        <PayContainer>
                            <PayCardWraqq2  ><span className='akd'>AKD + AKG</span> </PayCardWraqq2>
                            <PayCardWraqq2 ><span>AKD/AKG</span> </PayCardWraqq2>

                            <PayCardWraqq2>1 AKD = 1 AKG</PayCardWraqq2>
                            <PayCardWraqq2>0.000000 AKD</PayCardWraqq2>

                        </PayContainer>
                    </PayCard>


                    <button className='btn' onClick={() => { console.log('Hi'); }}>Enter an amount
                    </button>
                </CardBody>

            </Card>


        </Container>
    )
}
const PayContainer = styled.div`

`
const PayCard = styled.div`
margin-top: 24px;
display: flex;
width: 100%;
justify-content: center;
align-items: center;
`
const PayCardWraqq = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: rgba(255, 255, 255, 0.4);
margin-right: 229px;
margin-bottom: 12px;


`
const PayCardWraqq2 = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: rgba(255, 255, 255, 0.6);
margin-bottom: 12px;
span{
  position: relative;
  left: 35px;
}
.akd{
  position: relative;
  left: 25px;

}


`


const Container = styled.div`
display: flex;
width: 100%;
`
const Card = styled.div`
background: #27262C;
border-radius: 24px;
width: 500px;
height: 650px;
display: flex;
flex-direction: column;
color: wheat;
margin-top: 204px;
margin-left: 500px;
p{
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
}
.btn{
width: 432px;
height: 56px;
background: #FFFFFF;
border-radius: 12px;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
display: flex;
justify-content: center;
align-items: center;

}
`
const CardWrapper = styled.div`
display: flex;
flex-direction: column;

h1{
letter-spacing: -0.02em;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;
letter-spacing: -0.02em;
width: 100%;
color: #FFFFFF;
padding: 30px 34px 30px 34px ;


}
`
const Icon = styled.div`
display: flex;
width: 24px;
height: 24px;
margin-left: auto;
`

const Border = styled.div`
border: 1px solid rgba(255, 255, 255, 0.2);
`

const CardBody = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 20px 34px 20px 34px;

`
const CaardWrap = styled.div`
justify-content: center;
align-items: center;
display: flex;
width: 432px;
height: 84px;
padding: 20px 24px 20px 24px;
background: rgba(0, 0, 0, 0.2);
border-radius: 12px;
select{
background: #FFFFFF;
border-radius: 28px;
width: 142px;
height: 44px;
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #000000;
padding: 10px;
border: none;
}
input{
    margin-left: auto ;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 39px;
display: flex;
align-items: center;
text-align: center;
width: 41px;
height: 39px;
color: rgba(255, 255, 255, 0.14);
background: rgba(0, 0, 0, 0.2);
margin-right:14px ;

}
button{
width: 67px;
height: 34px;
background-color: #FFFFFF;
box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.4);
border-radius: 8px;
color: #000000;
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
border: none;
}

`
export default CreateApair




