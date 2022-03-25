import React from "react";
import qs from "qs";
import { Tables } from "./style";
import { Switch } from "antd";

const columns = [
  {
    title: "순서",
    dataIndex: "name",
    render: (name) => `${name.first.length}`,
    // width: "5%",
  },
  {
    title: "관리자 ID",
    dataIndex: "gender",
    render: () => `ioimmio`,
    // width: "10%",
  },
  {
    title: "	관리자 PW",
    dataIndex: "email",
    render: () => `x@ddd45rf`,
    // width: "10%",
  },
  {
    title: "관리자 이름	",
    dataIndex: "email",
    render: () => `AKD`,
    // width: "10%",
  },
  {
    title: "등록일	",
    dataIndex: "email",
    render: () => ` 2020-05-05 12:00:00`,
    // width: "10%",
  },
  {
    title: "수정일	",
    dataIndex: "email",
    render: () => ` 2020-05-05 12:00:00`,
    // width: "7%",
  },
  {
    title: "연락처	",
    dataIndex: "email",
    render: () => `010-1234-5678`,
    // width: "10%",
  },
  {
    title: "그룹명",
    dataIndex: "email",
    render: () => `admin`,
    // width: "10%",
  },
  {
    title: "사용여부",
    dataIndex: "email",
    render: () => <Switch />,
    // width: "10%",
  },


];

const getRandomuserParams = (params) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});

class Table extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    this.setState({ loading: true });
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loading: false,
          data: data.results,
          pagination: {
            ...params.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };
  render() {
    const { data, pagination, loading } = this.state;

    return (
      <Tables
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default Table;
