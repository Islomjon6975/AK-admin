import styled from "styled-components";

import { Menu } from "antd";

export const Wrap = styled.div`
  background-color: white;
  width: 255px;
  height: 94vh;
  position: sticky;
  top: 0;
  padding-top: 10px;
  margin-right: 44px;
`;

export const Menus = styled(Menu)`
  .ant-menu-inline .ant-menu-item::after {
    border: none;
  }

  .ant-menu-title-content,
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    font-family: "Roboto";
    background: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #555555;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    padding-left: 20px;
  }
`;
