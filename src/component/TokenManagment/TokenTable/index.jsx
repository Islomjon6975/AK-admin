import React from "react";
import qs from "qs";
import { Tables } from "./style";
import { Switch } from "antd";
const columns = [
  {
    title: "순서",
    dataIndex: "name",
    render: (name) => `${name.first.length}`,
    width: "5%",
  },
  {
    title: "토큰명",
    dataIndex: "gender",
    render: () => `AK dollar`,
    width: "10%",
  },
  {
    title: "심볼",
    dataIndex: "email",
    render: () => `심볼`,
    width: "10%",
  },
  {
    title: "Contract",
    dataIndex: "email",
    render: () => `0x7b24e052c138df127ab26a8bd5182ba913d9f7d0dd8a71...`,
    width: "10%",
  },
  {
    title: "총 수량",
    dataIndex: "email",
    render: () => `264,321`,
    width: "10%",
  },
  {
    title: "분배 수량",
    dataIndex: "email",
    render: () => `155,506`,
    width: "7%",
  },
  {
    title: "잔여 수량",
    dataIndex: "email",
    render: () => `1548 AKD`,
    width: "10%",
  },
  {
    title: "잔여 수량",
    dataIndex: "email",
    render: () => `155,506`,
    width: "10%",
  },
  {
    title: "사용여부",
    dataIndex: "email",
    render: () => <Switch />,
    width: "10%",
  },
];

const getRandomuserParams = (params) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

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
        rowSelection={{
          ...rowSelection,
        }}
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
