import React from "react";
import qs from "qs";
import { Tables } from "./style";
import { Href } from "../style";

const columns = [
  {
    title: "순서",
    dataIndex: "name",
    render: (name) => `${name.first.length}`,
    width: "5%",
  },
  {
    title: "거래일시",
    dataIndex: "gender",
    render: () => `2022-01-12 09:50:11`,
    width: "15%",
  },
  {
    title: "아이템",
    dataIndex: "email",
    render: () => `Friends #002`,
    width: "10%",
  },
  {
    title: "가격",
    dataIndex: "email",
    render: () => `100 AKD`,
    width: "10%",
  },
  {
    title: "거래번호",
    dataIndex: "email",
    render: () => `Or 13`,
    width: "10%",
  },
  {
    title: "거래방식",
    dataIndex: "email",
    render: () => `고정가`,
    width: "10%",
  },
  {
    title: "체결상태",
    dataIndex: "email",
    render: () => `진행중`,
    width: "10%",
  },
  {
    title: "결제금액",
    dataIndex: "email",
    render: () => `100 AKG`,
    width: "10%",
  },
  {
    title: "구매자",
    dataIndex: "email",
    render: () => `@ioimmoj`,
    width: "10%",
  },
  {
    title: "수수료",
    dataIndex: "email",
    render: () => `0.25 AKD`,
    width: "70%",
  },
  {
    title: "Transaction",
    dataIndex: "email",
    render: () => <Href>0x5906a5c0e5747ee...</Href>,
    width: "30%",
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
      pageSize: 6,
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
