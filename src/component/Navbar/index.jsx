import React from "react";
import { Box, Container, Flexing } from "./style";
import { Dropdown, Button } from "antd";

const menu = (
  <Box>
    <Flexing>
      <Box.Title flex>test</Box.Title>
      <Button type="primary" ghost>
        상세
      </Button>
    </Flexing>
    <Box.Hr />
    <Box.Title>PW 변경</Box.Title>
    <Box.Title>로그인 기록</Box.Title>
    <Box.Btn>로그아웃</Box.Btn>
  </Box>
);
export const Navbar = () => {
  return (
    <Container>
      <Container.Wrap>
        <Container.Logo />
        <Container.Header>AK Friends</Container.Header>
      </Container.Wrap>
      <Container.Wrap>
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Container.Wrap>
            <Container.Item>General admin</Container.Item>
            <Container.Arrow />
          </Container.Wrap>
        </Dropdown>
        <Container.Button>Connect Wallet</Container.Button>
      </Container.Wrap>
      {/* antd */}
    </Container>
  );
};

export default Navbar;
