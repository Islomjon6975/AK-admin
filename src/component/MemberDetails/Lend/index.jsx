import React from "react";
import { Container, Flexing } from "./style";
import Table from "./Table";
import { DatePicker, Input, Button } from "antd";
import moment from "moment";

export const Lend = () => {
  const { RangePicker } = DatePicker;
  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  function disabledDate(current) {
    return current && current < moment().endOf("day");
  }
  return (
    <Container>
      <Flexing>
        <RangePicker disabledDate={disabledDate} />
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <Button type="primary">EXCEL</Button>
      </Flexing>
      <Table />
    </Container>
  );
};

export default Lend;
