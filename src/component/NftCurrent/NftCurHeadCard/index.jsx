import React from "react";
import { Container, Title } from "./style";

export const ItemCArd = () => {
  return (
    <Container>
      <Container.Item>
        <Title>
          <Title.Item>item</Title.Item>
        </Title>

        <Title.Cont>
          <Title.Secound>
            <Title.Wrep>금일 등록수</Title.Wrep>
            <Title.Wrep>누적 MINTING 수 </Title.Wrep>
          </Title.Secound>
          <Title.Secound>
            <Title.Num>25</Title.Num>
            <Title.Num>15,646,860</Title.Num>
          </Title.Secound>
        </Title.Cont>
      </Container.Item>
      {/* minting */}
      <Container.Item>
        <Title>
          <Title.Item>minting</Title.Item>
        </Title>

        <Title.Cont>
          <Title.Secound>
            <Title.Wrep>금일 등록수</Title.Wrep>
            <Title.Wrep>누적 MINTING 수 </Title.Wrep>
          </Title.Secound>
          <Title.Secound>
            <Title.Num>25</Title.Num>
            <Title.Num>15,646,860</Title.Num>
          </Title.Secound>
        </Title.Cont>
      </Container.Item>
    </Container>
  );
};
export default ItemCArd;
