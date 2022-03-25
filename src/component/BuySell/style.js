import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
  @media (max-width: 1810px) {
    overflow-x: scroll;
  }
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

Flexing.Header = styled(NavLink)`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  padding-bottom: 12px;
  margin-left: 13px;
  width: 120px;
  display: flex;
  justify-content: center;
`;
