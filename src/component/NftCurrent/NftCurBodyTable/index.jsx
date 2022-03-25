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
    title: "아이템",
    dataIndex: "gender",
    render: () => `Friends #0002`,
    // width: "10%",
  },
  {
    title: " 아이템 번호",
    dataIndex: "email",
    render: () => `A20e989...`,
    // width: "10%",
  },
  {
    title: "가격",
    dataIndex: "email",
    render: () => `100 AKD`,
    // width: "10%",
  },
  {
    title: "판매방식",
    dataIndex: "email",
    render: () => `고정가`,
    // width: "10%",
  },
  {
    title: "Contract",
    dataIndex: "email",
    render: () => `0x5906a5c0e5747ee...`,
    // width: "7%",
  },
  {
    title: "상태",
    dataIndex: "email",
    render: () => `진행중`,
    // width: "10%",
  },

  {
    title: " Owner",
    dataIndex: "email",
    render: () => `@ioimmoj`,
    // width: "10%",
  },
  {
    title: " 등록일",
    dataIndex: "email",
    render: () => `2022-01-12 09:50:11`,
    // width: "10%",
  }, {
    title: "수정일",
    dataIndex: "email",
    render: () => `2022-01-12 09:50:11`,
    // width: "10%",
  },
];

const getRandomuserParams = (params) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});


class NftTable extends React.Component {
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

export default NftTable;
