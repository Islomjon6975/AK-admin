import React from "react";
import qs from "qs";
import { Tables } from "./style";

const columns = [
  {
    title: "순서",
    dataIndex: "name",
    render: (name) => `${name.first.length}`,
    // width: "5%",
  },
  {
    title: "지갑주소",
    dataIndex: "gender",
    render: () => `0x8...F7F8`,
    // width: "10%",
  },
  {
    title: "symbol",
    dataIndex: "email",
    render: () => `AKD`,
    // width: "10%",
  },
  {
    title: "address",
    dataIndex: "email",
    render: () => `0x8...F7F8`,
    // width: "10%",
  },
  {
    title: "amount",
    dataIndex: "email",
    render: () => `409.169 USDT`,
    // width: "10%",
  },
  {
    title: "symbol",
    dataIndex: "email",
    render: () => `50`,
    // width: "7%",
  },
  {
    title: "address",
    dataIndex: "email",
    render: () => `1548 AKD`,
    // width: "10%",
  },
  {
    title: "amount",
    dataIndex: "email",
    render: () => `1548 AKG`,
    // width: "10%",
  },
  {
    title: "slippage",
    dataIndex: "email",
    render: () => `일반`,
    // width: "10%",
  },
  {
    title: "노트",
    dataIndex: "email",
    render: () => `02022-01-29 11:00:00`,
    // width: "40%",
  },
  {
    title: "Contract",
    dataIndex: "email",
    render: () => `02022-01-29 11:00:00`,
    // width: "40%",
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
