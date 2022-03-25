
import React from 'react'
import { Table } from 'antd';
import { TableContainer } from './style';
const sharedOnCell = (_, index) => {
    if (index === 4) {
        return { colSpan: 0 };
    }
};

const columns = [
    {
        title: '지급타입',
        dataIndex: 'name',

    },
    {
        title: '지갑주소',
        dataIndex: 'age',
        onCell: sharedOnCell,
    },
    {
        title: '지급수량',
        dataIndex: 'tel',

    },
    {
        title: '지급금액',
        dataIndex: 'address',
        onCell: sharedOnCell,
    },
];

const data = [
    {
        key: '1',
        name: 'Stake',
        age: '0x8C4077dfEb3621Ed2DDD07F36...',
        tel: '100',
        address: '$6.00',
    },


];


export const TableHome = () => {
    return (
        <TableContainer columns={columns} dataSource={data} />
    )
}
export default TableHome

