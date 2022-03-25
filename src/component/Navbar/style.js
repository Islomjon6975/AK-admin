import styled from "styled-components";
import logo from "../../assets/imgs/logo.png";
import { ReactComponent as arrow } from "../../assets/icons/arrow-bottom.svg";
export const Container = styled.div`
  background: #21325b;
  width: 100%;
  padding: 0px 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

Container.Wrap = styled.div`
  display: flex;
  align-items: center;
`;

Container.Logo = styled.div`
  background-image: url(${logo});
  background-size: 100% 100%;
  width: 58px;
  height: 58px;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.04em;
  color: #ffffff;
`;

Container.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.04em;
  color: #ffffff;
`;

Container.Arrow = styled(arrow)`
  margin: 0px 20px 0px 7px;
`;

Container.Button = styled.div`
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  width: 160px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.04em;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    background-color: white;
    color: #21325b;
  }
`;

// dropdown design
export const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  width: 248px;
  height: 201px;
  padding-top: 24px;
`;

export const Flexing = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

Box.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #7a7a7a;
  width: ${({ flex }) => !flex && "80%"};
  margin: ${({ flex }) => !flex && "auto"};
`;

Box.Hr = styled.div`
  border-bottom: 1px solid #d9d9d9;
  margin: 20px auto;
  width: 80%;
`;

Box.Btn = styled.div`
  background: #f1f2f4;
  width: 100%;
  height: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #7a7a7a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 0px 0px 8px 8px;
  cursor: pointer;
  :hover {
    background-color: #4876ef;
    color: white;
  }
`;
