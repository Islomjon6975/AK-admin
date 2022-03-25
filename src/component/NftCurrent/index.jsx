import React from "react";
import { Container, Flexing } from "./style";
import { DatePicker, Input, Button } from "antd";
import moment from "moment";
import NftTable from "./NftCurBodyTable";
import ItemCArd from "./NftCurHeadCard";

export const Minting = () => {
  const { RangePicker } = DatePicker;
  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  function disabledDate(current) {
    return current && current < moment().endOf("day");
  }
  return (

    <Container>
      <ItemCArd />
      <Container.Card>
        <Flexing>
          <RangePicker disabledDate={disabledDate} />
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
          <Button type="primary">EXCEL</Button>
        </Flexing>

        <NftTable />
      </Container.Card>

    </Container>
  );
};

export default Minting;
