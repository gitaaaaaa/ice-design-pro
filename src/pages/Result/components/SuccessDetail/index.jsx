import React from 'react';
import IceContainer from '@icedesign/container';
import { Button, Step, Message } from '@alifd/next';
import { withRouter } from 'react-router-dom';
import styles from './index.module.scss';

export default withRouter(((props) => {
  function handleBackClick() {
    props.history.push('/');
  }

  function handleLinkClick() {
    Message.success('可以根据实际需求自定义查看更多');
  }

  const setpConfig = {
    value: [
      "填写信息",
      "申请审核",
      "开通账号",
      "完成",
    ],
    current: 1, // 当前步骤
    type: 'dot', // 步骤的类型，可选值: 'circle', 'arrow', 'dot'
  };
  const { value, current, type } = setpConfig;
  return (
    <IceContainer className={styles.container}>
      <div className={styles.head}>
        <img
          src={require('./images/TB1ya6gh0zJ8KJjSspkXXbF7VXa-156-156.png')}
          className={styles.img}
          alt=""
        />
        <h3 className={styles.title}>
        提交成功
        </h3>
      </div>
      <p className={styles.summary}>
      本文字区域可以展示简单的说明
      </p>
      <p className={styles.descrpiton}>
      如果有跟多细节需要展示，可以补充在下面这里，一些相关的介绍和描述
      </p>
      <Step current={current} shape={type} className={styles.step}>
        {value.map((item, index) => {
          return <Step.Item key={index} title={item} />;
        })}
      </Step>
      <div className={styles.buttons}>
        <Button
          type="normal"
          onClick={handleBackClick}
          style={{ marginRight: '6px' }}
        >
          返回首页
        </Button>
        <Button type="primary" onClick={handleLinkClick}>
        查看更多
        </Button>
      </div>
    </IceContainer>
  );
}));

