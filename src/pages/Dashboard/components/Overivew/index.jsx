import React from 'react';
import IceContainer from '@icedesign/container';
import { Balloon, Grid, Icon } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Overivew() {
  const down = (
    <img
      src={require('./images/TB1ReMsh3vD8KJjy0FlXXagBFXa-12-18.png')}
      className={styles.down}
      alt=""
    />
  );

  const up = (
    <img
      src={require('./images/TB1Q1Msh3vD8KJjy0FlXXagBFXa-12-18.png')}
      className={styles.up}
      alt=""
    />
  );

  const yoy = (
    <div className={styles.desc}>
      <span>
        周同比 {down} -200
      </span>
      <span className={{ marginLeft: 5 }}>
        日同比 {up} +100
      </span>
    </div>
  );

  const extraIcon = (
    <span className={styles.extraIcon}>
      <Balloon
        trigger={
          <Icon
            type="help"
            size="xs"
            style={{
              position: 'relative',
              top: '-2px',
              color: '#666',
            }}
          />
        }
        triggerType="hover"
        closable={false}
      >
        这里是数据说明
      </Balloon>
    </span>
  );

  return (
    <IceContainer className={styles.container}>
      <Row wrap>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            今日交易总额
            {extraIcon}
          </div>
          <div className={styles.count}>￥ 146,657</div>
          {yoy}
        </Col>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            >销售目标完成率
            {extraIcon}
          </div>
          <div className={styles.count}>92%</div>
          {yoy}
        </Col>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            每秒交易总额
            {extraIcon}
          </div>
          <div className={styles.count}>￥ 833</div>
          {yoy}
        </Col>
        <Col xxs="24" s="12" l="6" className={styles.item}>
          <div className={styles.title}>
            总销售额
            {extraIcon}
          </div>
          <div className={styles.count}>￥ 23,333</div>
          {yoy}
        </Col>
      </Row>
    </IceContainer>
  );
}
