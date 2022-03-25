import styled from "styled-components";

export const Container = styled.div`
  padding-top: 44px;

  .ant-table-container {
    width: 100%;
  }

  .ant-pagination-item {
    display: none;
  }

  .ant-pagination-item {
    display: none;
  }

  h4 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .ant-table.ant-table-middle {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }

  .ant-table.ant-table-middle .ant-table-title,
  .ant-table.ant-table-middle .ant-table-footer,
  .ant-table.ant-table-middle .ant-table-thead > tr > th,
  .ant-table.ant-table-middle .ant-table-tbody > tr > td,
  .ant-table.ant-table-middle tfoot > tr > th,
  .ant-table.ant-table-middle tfoot > tr > td {
    padding: 18px 20px;
  }
`;

Container.Wrapper = styled.div`
  width: 95%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 34px 50px;
  margin-right: 120px;
`;

Container.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

Container.Link = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #4876ef;
  margin-left: 10px;
`;

Container.Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 162px;
  height: 44px;
  background: #4876ef;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin-left: auto;
`;
