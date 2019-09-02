import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default (() => {
 
  // 渲染详情信息的数据
  const dataSource = {
    title: '集盒家居旗舰店双十一活动',
    shopName: '集盒家居旗舰店',
    amount: '1000.00',
    bounty: '任务赏金',
    orderTime: '2017-10-18 12:20:07',
    deliveryTime: '2017-10-18 12:20:07',
    phone: '138xxxx9876',
    address: '收货地址',
    status: '进行中',
    remark: '暂无',
    pics: [
      require('./images/img4.jpg'),
      require('./images/img3.jpg'),
      require('./images/img2.jpg'),
      require('./images/img1.jpg'),
    ],
  };

  return (
    <IceContainer>
      <h2 className={styles.basicDetailTitle}>
      基础详情页
      </h2>

      <div className={styles.infoColumn}>
        <h5 className={styles.infoColumnTitle}>
        基本信息
        </h5>
        <Row wrap className={styles.infoItems}>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
            任务标题：
            </span>
            <span className={styles.infoItemValue}>{dataSource.title}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
            店铺名称：
            </span>
            <span className={styles.infoItemValue}>{dataSource.shopName}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
            任务金额：
            </span>
            <span className={styles.infoItemValue}>¥ {dataSource.amount}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
            任务赏金：
            </span>
            <span className={styles.infoItemValue}>¥ {dataSource.bounty}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
            接单时间：
            </span>
            <span className={styles.infoItemValue}>{dataSource.orderTime}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
            交付时间
              ：
            </span>
            <span className={styles.infoItemValue}>
              {dataSource.deliveryTime}
            </span>
          </Col>
        </Row>
      </div>
      <div className={styles.infoColumn}>
        <h5 className={styles.infoColumnTitle}>
        更多信息
        </h5>
        <Row wrap className={styles.infoItems}>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
            联系方式：
            </span>
            <span className={styles.infoItemValue}>{dataSource.phone}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
            收货地址：
            </span>
            <span className={styles.infoItemValue}>{dataSource.address}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
            任务状态：
            </span>
            <span className={styles.infoItemValue}>{dataSource.status}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.infoItemLabel}>
            备注：
            </span>
            <span className={styles.infoItemValue}>{dataSource.remark}</span>
          </Col>
          <Col xxs="24" l="12" className={styles.infoItem}>
            <span className={styles.attachLabel}>
            附件：
            </span>
            <span>
              {dataSource.pics &&
                dataSource.pics.length &&
                dataSource.pics.map((pic, index) => {
                  return (
                    <img
                      key={index}
                      src={pic}
                      className={styles.attachPics}
                      alt="图片"
                    />
                  );
                })}
            </span>
          </Col>
        </Row>
      </div>
    </IceContainer>
  );
});
