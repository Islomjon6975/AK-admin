import React from "react";
import BodyCard from "./BodyCard";
import BodyChard from "./BodyCard/Chart";
import HeadCharts from "./HeadCards";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <HeadCharts />
      <Container.Body>
        <BodyCard />
        <BodyChard />
      </Container.Body>
    </Container>
  );
};
export default Home;
