import styled from "styled-components";

export const Container = styled.div`
  margin-top: 44px;
 
`;
Container.Card = styled.div`
  margin-top: 40px;
 background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 34px 58px 30px 58px;
  /* height: 100%; */
  border-radius: 12px;
  position: relative;
  @media (max-width: 1810px) {
    overflow-x: scroll;
  }
`

Container.Header = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-left: auto;
  margin-bottom: -70px;
  .ant-picker {
    height: 44px;
    border: 1px solid #d9d9d9;
  }
  .ant-input-group {
    margin-left: 14px;
    /* border-radius: 8px; */
  }
  .ant-input-group .ant-input {
    height: 44px;
    width: 200px;
    border: 1px solid #d9d9d9;
    border-radius: 8px 0px 0px 8px;
  }

  .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    height: 44px;
    width: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 0px 8px 8px 0px;
  }

  .ant-btn-primary {
    margin-left: 80px;
    width: 162px;
    height: 44px;
    border-radius: 8px;
  }
`;

export const Href = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #4876ef;
`;
