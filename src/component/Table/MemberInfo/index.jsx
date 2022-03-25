import React from "react";
import { Container } from "./style";
import { Table } from "antd";

const columns = [
  {
    title: "지갑주소",
    dataIndex: "name",
  },
  {
    title: "0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0",
    dataIndex: "age",
  },
  {
    title: "거래횟수",
    dataIndex: "address",
  },
  {
    title: "2",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "가입일",
    age: "2022-01-22 14:22:22",
    address: "수익률",
    description: "+102.12%",
  },
  {
    key: "2",
    name: "닉네임",
    age: "@ioimmoj",
    address: "보유 아이템",
    text: "+102.12%",
  },
  {
    key: "3",
    name: "프로필 아이템",
    age: "Friends #002",
    address: "보유 AKD",
    text: "+102.12%",
  },
  {
    key: "4",
    name: "예치량",
    age: "1548 USDT",
    address: "보유 AKG",
    text: "+102.12%",
  },
  {
    key: "5",
    name: "출금량",
    age: "1548 USDT",
    address: "계정 활성",
    text: "+102.12%",
  },
];

export const MemberInfo = () => {
  return (
    <Container>
      <Container.Wrapper>
        <div>
          <h4>
            <Container.Title> 회원정보 확인 {">"}</Container.Title>{" "}
            <Container.Link>
              {" "}
              i0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0
            </Container.Link>{" "}
          </h4>
          <Table
            style={{ width: "1300px", margin: "auto", background: "red" }}
            columns={columns}
            dataSource={data}
            size="middle"
          />
        </div>
        <Container.Button>저장</Container.Button>
      </Container.Wrapper>
    </Container>
  );
};
