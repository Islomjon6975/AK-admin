import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px; ;
`;
Container.Item = styled.div`
  display: flex;
  flex-direction: column;

  padding: 34px 0px 45px 54px;
  width: 748px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
Title.Item = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: auto;
`;
Title.Wrep = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #7a7a7a;
`;
Title.Secound = styled.div``;
Title.Cont = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 56px; ;
`;
Title.Num = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;
