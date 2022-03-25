import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 30px;
`;
Container.Cards = styled.div`
  width: 359px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
Container.Titl = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
Container.Sum = styled.div`
  margin: 22px 0px 19px 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
