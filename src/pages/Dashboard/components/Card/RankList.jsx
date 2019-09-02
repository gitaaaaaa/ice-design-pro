import React from 'react';
import { Table } from '@alifd/next';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function RankList(props) {
  const { subTitle, dataSource, columns } = props;

  return (
    <div className={styles.content}>
      <h3 className={styles.subTitle}>{subTitle}</h3>
      <Table dataSource={dataSource} hasBorder={false} className={styles.table}>
        {columns.map((item) => {
          return (
            <Table.Column
              key={item.key}
              title={item.title}
              dataIndex={item.dataIndex}
            />
          );
        })}
      </Table>
      <div className={styles.footer}>
        <a href="#" className={styles.link}>
          更多
        </a>
      </div>
    </div>
  );
}

RankList.defaultProps = {
  columns: [],
  dataSource: [],
};

RankList.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
};
