import React from "react";
import { Container, Flexing } from "./style";
import Table from "./TransactionTable";
import { DatePicker, Input, Button } from "antd";
import moment from "moment";

export const Transactions
  = () => {
    const { RangePicker } = DatePicker;
    const { Search } = Input;

    const onSearch = (value) => console.log(value);

    function disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf("day");
    }
    return (
      <Container>
        <Container.TitleAssed>Transactions</Container.TitleAssed>
        <Flexing>
          <RangePicker disabledDate={disabledDate} />
          <Search placeholder="검색" onSearch={onSearch} style={{ width: 200 }} />
          <Button type="primary">EXCEL</Button>
        </Flexing>
        <Table />
      </Container>
    );
  };

export default Transactions
  ;
