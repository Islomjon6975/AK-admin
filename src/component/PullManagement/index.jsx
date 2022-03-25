import React, { useState } from "react";
import { Container, Flexing } from "./style";
import Table from "./PullTable";
import { DatePicker, Input, Button, Modal, Form } from "antd";
import moment from "moment";

export const PullManagment = () => {
  const { RangePicker } = DatePicker;
  const { Search } = Input;

  const { Item } = Form;

  const onSearch = (value) => console.log(value);

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }
  const [register, setRegister] = useState(false);
  const [visible, setVisible] = useState({
    컨트랙트: "",
    토큰명한글: "",
    토큰명영문: "",
    소수자릿수: "",
    심볼: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisible({ ...visible, [name]: value });
    console.log(visible);
  };
  const registerModal = () => {
    setRegister(true);
  };
  const cancelModal = () => {
    setRegister(false);
  };
  const action = () => {
    console.log("action");
    cancelModal();
  };
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <Container>
      <Container.Title>Pull 관리</Container.Title>
      <Flexing>
        <RangePicker disabledDate={disabledDate} />
        <Search placeholder="검색" onSearch={onSearch} style={{ width: 200 }} />
        <Button type="primary" onClick={registerModal}>
          등록
        </Button>
      </Flexing>
      <Table />
      <Modal
        title="Register pool"
        style={{ top: 100, left: 400 }}
        visible={register}
        onOk={action}
        centered
        onCancel={cancelModal}
        footer={[
          <Button onClick={cancelModal}>취소</Button>,
          <Button type="primary" onClick={action}>
            확인
          </Button>,
        ]}
      >
        <Form {...layout}>
          <Item label="컨트랙트">
            <Input name="컨트랙트" onChange={handleChange} />
          </Item>
          <Item label="토큰명한글">
            <Input name="토큰명한글" onChange={handleChange} />
          </Item>
          <Item label="토큰명영문">
            <Input name="토큰명영문" onChange={handleChange} />
          </Item>
          <Item label="소수자릿수">
            <Input name="소수자릿수" onChange={handleChange} />
          </Item>
          <Item label="심볼">
            <Input name="심볼" onChange={handleChange} />
            <Button type="primary" ghost>
              상세
            </Button>
          </Item>
        </Form>
      </Modal>
    </Container>
  );
};

export default PullManagment;
