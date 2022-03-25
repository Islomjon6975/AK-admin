import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Flexing } from "./style";
export const BuySell = () => {
  return (
    <Container>
      <Flexing>
        <Flexing.Header to={"buy"}>Buy</Flexing.Header>
        <Flexing.Header to={"sell"}>Sell</Flexing.Header>
      </Flexing>
      <Outlet />
    </Container>
  );
};

export default BuySell;
