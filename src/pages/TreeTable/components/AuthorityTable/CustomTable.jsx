import React, { useState } from 'react';
import { Table, Pagination, Loading, Balloon, Icon } from '@alifd/next';
import styles from './index.module.scss';

const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {

    return {
      id: index + 1,
      orderID: `12022123${index}`,
      name: '张一峰',
      title: '主治医师',
      date: `2018-06-${index + 1}`,
      endDate: `2018-06-${index + 1}`,
      validData: `2018-06-${index + 1}`,
      category: '皮肤科',
      state: '已审核',
      approver: '刘建明',
      approvalData: `2018-06-${index + 1}`,
    };
  });
};

export default function Home() {
  const [current, setCurrent] = useState(1);
  const [dataSource, setData] = useState(getData());

  const onChange = function (...args) {
    console.log(...args);
  }, handlePagination = (current) => {
    setCurrent(current);
    setData(dataSource);
  }, handleSort = (dataIndex, order) => {
    const dataSource = dataSource.sort((a, b) => {
      const result = a[dataIndex] - b[dataIndex];
      if (order === 'asc') {
        return result > 0 ? 1 : -1;
      }
      return result > 0 ? -1 : 1;
    });

    setData(dataSource);
  }, renderCatrgory = (value) => {
    return (
      <Balloon
        align="lt"
        trigger={<div className={styles.triggerMargin}>{value}</div>}
        closable={false}
        className={styles.balloonLineHeight}
      >
        皮肤科属于外科，主要治疗各种皮肤病，常见皮肤病有牛皮癣 、 疱疹
        、酒渣鼻等
      </Balloon>
    );
  }, renderState = (value) => {
    return (
      <div>
        <span className={styles.circle} />
        <span className={styles.stateText}>{value}</span>
      </div>
    );
  }, renderOper = () => {
    return (
      <div>
        <Icon type="edit" size="small" className={styles.editIcon} />
      </div>
    );
  }, rowSelection = {
    onChange: onChange,
    getProps: (record) => {
      return {
        disabled: record.id === 100306660942
      };
    }
  };

  return (
    <div className={styles.tableContainer}>
      <Table
        dataSource={dataSource}
        onSort={handleSort}
        hasBorder={false}
        rowSelection={rowSelection}
      >
        <Table.Column title="序列号" dataIndex="id" sortable align="center" />
        <Table.Column title="单号" dataIndex="orderID" sortable />
        <Table.Column title="名称" dataIndex="name" />
        <Table.Column title="职称" dataIndex="title" />
        <Table.Column title="入职日期" dataIndex="date" />
        <Table.Column title="实习结束日期" dataIndex="endDate" />
        <Table.Column title="转正生效日期" dataIndex="validData" />
        <Table.Column title="科室" dataIndex="category" cell={renderCatrgory} />
        <Table.Column title="状态" dataIndex="state" cell={renderState} />
        <Table.Column title="审核人" dataIndex="approver" />
        <Table.Column title="审核日期" dataIndex="approvalData" />
        <Table.Column title="操作" cell={renderOper} align="center" />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePagination}
      />
    </div>
  );
}

