import React from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import SeriesLine from './SeriesLine';
import BasicLine from './BasicLine';
import styles from './index.module.scss';

function TabChart() {
  function handleChange(key) {
    console.log('change', key);
  }

  return (
    <div className={styles.container}>
      <IceContainer className={styles.card}>
        <Tab onChange={handleChange}>
          <Tab.Item
            key="1"
            title="收益走势"
          >
            <SeriesLine />
          </Tab.Item>
          <Tab.Item
            key="2"
            title="成交走势"
          >
            <BasicLine />
          </Tab.Item>
        </Tab>
      </IceContainer>
    </div>
  );
}

export default TabChart;
