import React from 'react';
import { Chart, Geom, Tooltip, Coord } from 'bizcharts';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';

import styles from './index.module.scss';

const { Row, Col } = Grid;

export default (() => {
 
  const mockData = [
    {
      chartData: [
        { type: '分类一', value: 20 },
        { type: '分类二', value: 80 },
      ],
      title: "销售占比",
      summary: "新零售",
    },
    {
      chartData: [
        { type: '分类一', value: 50 },
        { type: '分类二', value: 50 },
      ],
      title: "销售占比",
      summary: "实体店",
    },
    {
      chartData: [
        { type: '分类一', value: 80 },
        { type: '分类二', value: 20 },
      ],
      title: "销售占比",
      summary: "淘宝店",
    },
  ];
  return (
    <IceContainer
      title="概览数据"
    >
      <Row wrap>
        {mockData.map((item, index) => {
          return (
            <Col xxs="24" l="8" key={index}>
              <Chart height={200} data={item.chartData} forceFit padding={10}>
                <Coord type="theta" innerRadius={0.75} />
                <Tooltip showTitle={false} />
                <Geom
                  type="intervalStack"
                  position="value"
                  color="type"
                  shape="sliceShape"
                />
              </Chart>
              <div className={styles.content}>
                <p className={styles.summary}>{item.summary}</p>
                <h4 className={styles.title}>{item.title}</h4>
              </div>
            </Col>
          );
        })}
      </Row>
    </IceContainer>
  );
});
