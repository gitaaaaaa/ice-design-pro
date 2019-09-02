import React from 'react';
import { Icon } from '@alifd/next';
import styles from './index.module.scss';

export default function Trend(props) {
  const { className } = props;
  const wrapperClassName = styles.content + (className ? ` ${className}` : '');

  return (
    <div className={wrapperClassName}>
      <div className={styles.trendItems}>
        <div className={styles.trendItem}>
          <span>
          周同比
            <span className={styles.trendRate}>12%</span>
          </span>
          <span className={styles.arrowIcon}>
            <Icon type="arrow-down-filling" size="xxs" />
          </span>
        </div>
        <div className={styles.trendItem}>
          <span>
          日同比
            <span className={styles.trendRate}>10%</span>
          </span>
          <span className={styles.arrowIcon}>
            <Icon type="arrow-up-filling" size="xxs" />
          </span>
        </div>
      </div>
    </div>
  );
}
