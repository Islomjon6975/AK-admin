import React from "react";
import styled from "styled-components";
import { ReactComponent as Restart } from '../../../assets/icons/restart.svg';
export const PulllPraduct = () => {

    return (
        <Container>
            <Card>
                <CardWrapper>
                    <h1>
                        Create a pair
                        <Icon>
                            <Restart />{" "}
                        </Icon>
                    </h1>
                    <Border />
                </CardWrapper>

                <CardBody>
                    <p>Balance 0.000000</p>
                    <CaardWrap>
                        <select>
                            <option>USTD</option>
                            <option value="1">USTD</option>
                            <option value="2">BUSD</option>
                        </select>
                        <input placeholder="0.0" type="text" />
                        <button>MAX</button>
                    </CaardWrap>
                </CardBody>

                <CardBody>
                    <p>Balance 0.000000</p>
                    <CaardWrap>
                        <select>
                            <option>USTD</option>
                            <option value="1">USTD</option>
                            <option value="2">BUSD</option>
                        </select>
                        <input placeholder="0.0" type="text" />
                        <button>MAX</button>
                    </CaardWrap>
                    <button
                        className="btn"
                        onClick={() => {
                            console.log('click');
                        }}
                    >
                        Enter an amount
                    </button>
                </CardBody>
            </Card>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Card = styled.div`
  background: #27262c;
  border-radius: 24px;
  width: 500px;
  height: 522px;
  display: flex;
  flex-direction: column;
  color: wheat;
  margin-top: 204px;
  margin-left: 500px;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
  .btn {
    margin-top: 30px;
    width: 432px;
    height: 56px;
    background: #ffffff;
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
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    width: 100%;
    color: #ffffff;
    padding: 30px 34px 30px 34px;
  }
`;
const Icon = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  margin-left: auto;
`;

const Border = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 34px 20px 34px;
`;
const CaardWrap = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 432px;
  height: 84px;
  padding: 20px 24px 20px 24px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  select {
    background: #ffffff;
    border-radius: 28px;
    width: 142px;
    height: 44px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    padding: 10px;
    border: none;
  }
  input {
    margin-left: auto;
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
    margin-right: 14px;
  }
  button {
    width: 67px;
    height: 34px;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    color: #000000;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    border: none;
  }
`;
export default PulllPraduct;
