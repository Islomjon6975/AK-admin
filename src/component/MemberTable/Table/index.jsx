import React from "react";
import { Tables } from "./style";

const columns = [
  {
    title: "순서",
    dataIndex: "id",
    width: "5%",
    render: (name) => name,
  },
  {
    title: "지갑주소",
    dataIndex: "username",
    render: (user) => `${user.substr(0, 10)}...`,
    width: "10%",
  },
  {
    title: "닉네임",
    dataIndex: "username",
    render: () => `@ioimmoj`,
    width: "10%",
  },
  {
    title: "예치량",
    dataIndex: "username",
    render: () => `409.169 USDT`,
    width: "10%",
  },
  {
    title: "출금량",
    dataIndex: "username",
    render: () => `409.169 USDT`,
    width: "10%",
  },
  {
    title: "Item 수",
    dataIndex: "username",
    render: () => `50`,
    width: "7%",
  },
  {
    title: "보유 AKD",
    dataIndex: "username",
    render: () => `1548 AKD`,
    width: "10%",
  },
  {
    title: "보유 AKG",
    dataIndex: "username",
    render: () => `1548 AKG`,
    width: "10%",
  },
  {
    title: "회원상태",
    dataIndex: "username",
    render: () => `일반`,
    width: "10%",
  },
  {
    title: "가입일",
    dataIndex: "createdat",
    render: (date) => date,
    width: "40%",
  },
];

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
      `http://animalkingdom1.net:31273/queries/rows/users/active/1/10/30/username/DESC?`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          loading: false,
          data: data.list,
          pagination: {
            ...params.pagination,
            total: 55,
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
        rowKey={(record) => record?.id}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default Table;
