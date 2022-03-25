import { Table } from "antd";
import styled from "styled-components";

export const Tables = styled(Table)`
  min-width: 1430px;
  margin: auto;
  padding-top: 100px;

  .ant-table-cell {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: #000000;
  }

  .ant-select {
    color: #7a7a7a;
    position: absolute;
    top: -70px;
    left: 0;
    z-index: 999;
    width: 160px !important;
  }

  .ant-table-pagination {
    justify-content: center;
  }

  .ant-pagination-item-active,
  .ant-pagination-item-active a {
    background: #d9d9d9;
    border: none;
    color: white;
  }

  .ant-pagination-item {
    border: none;
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border: none;
  }
`;
