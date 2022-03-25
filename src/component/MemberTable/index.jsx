import React, { useState } from "react";
import { Container, Flexing } from "./style";
import Table from "./Table";
import { DatePicker, Input, Button } from "antd";
import moment from "moment";

export const MemberTable = () => {
  const { RangePicker } = DatePicker;
  const { Search } = Input;
  const [title, setTitle] = useState("");
  const onSearch = (value) => console.log(value);

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  return (
    <Container>
      <Flexing>
        <RangePicker disabledDate={disabledDate} />
        <Search
          onChange={(e) => setTitle(e.target.value)}
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <Button type="primary">Primary Button</Button>
      </Flexing>
      <Table text={title} />
    </Container>
  );
};

export default MemberTable;
