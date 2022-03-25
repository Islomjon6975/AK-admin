import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Flexing } from "./style";

export const MemberDetalist = () => {
  return (
    <Container>
      <Flexing>
        <Flexing.Header to={"minting"}>Minting</Flexing.Header>
        <Flexing.Header to={"market"}>Market</Flexing.Header>
        <Flexing.Header to={"lend"}>Lend</Flexing.Header>
      </Flexing>
      <Outlet />
    </Container>
  );
};

export default MemberDetalist;
