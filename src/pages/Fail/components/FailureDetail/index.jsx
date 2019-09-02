import React from 'react';
import { Button, Message } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

export default function FailureDetail() {
  function handleChange() {
    Message.success('可以根据实际需求自定义返回修改');
  }

  return (
    <IceContainer className={styles.container}>
      <div className={styles.head}>
        <img
          className={styles.img}
          src={require('./images/TB1LUMhhY_I8KJjy1XaXXbsxpXa-156-156.png')}
          alt=""
        />
        <h3 className={styles.title}>
        提交失败
        </h3>
      </div>
      <p className={styles.summary}>
      提供信息不符合要求，请重新提交
      </p>
      <p className={styles.descrpiton}>
      如果有更多细节需要展示，可以补充在这里，一些相关的介绍和描述
      </p>
      <Button type="primary" onClick={handleChange}>
      返回修改
      </Button>
    </IceContainer>
  );
}
