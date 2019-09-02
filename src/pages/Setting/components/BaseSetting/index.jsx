import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Radio, Switch, Upload, Grid, Form } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { xxs: 6, s: 3, l: 3 },
  wrapperCol: { s: 12, l: 10 },
};

function beforeUpload(info) {
  console.log('beforeUpload callback : ', info);
}

function onChange(info) {
  console.log('onChane callback : ', info);
}

function onSuccess(res, file) {
  console.log('onSuccess callback : ', res, file);
}

function onError(file) {
  console.log('onError callback : ', file);
}

export default (() => {
  const [value, setValue] = useState({
    name: '',
    gender: 'male',
    notice: false,
    email: '',
    avatar: [],
    siteUrl: '',
    githubUrl: '',
    twitterUrl: '',
    description: '',
  });

  function formChange(val) {
    setValue(val);
  }

  function validateAllFormField(values, errors) {
    console.log('error', errors, 'value', values);
    if (!errors) {
      // 提交当前填写的数据
    } else {
      // 处理表单报错
    }
  }

  return (
    <div className="settings-form">
      <IceContainer>
        <Form value={value} onChange={formChange}>
          <div className={styles.formContent}>
            <h2 className={styles.formTitle}>
            基本设置
            </h2>

            <FormItem
              label='姓名'
              {...formItemLayout}
              required
              maxLength={10}
              requiredMessage='必填'
            >
              <Input name="name" placeholder="taoxiaobao" />
            </FormItem>
            <FormItem
              label='头像'
              {...formItemLayout}
              required
              requiredMessage='必填'
            >
              <Upload.Card
                name="avatar"
                listType="card"
                action=""
                accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                beforeUpload={beforeUpload}
                onChange={onChange}
                onSuccess={onSuccess}
                onError={onError}
              />
            </FormItem>
            <FormItem
              label='性别'
              {...formItemLayout}
              required
              requiredMessage='必填'
            >
              <RadioGroup name="gender">
                <Radio value="male">
                男
                </Radio>
                <Radio value="female">
                女
                </Radio>
              </RadioGroup>
            </FormItem>

            <FormItem
              label='通知'
              {...formItemLayout}
            >
              <Switch name="notice" />
            </FormItem>
            <FormItem
              label='邮箱'
              {...formItemLayout}
              required
              requiredMessage='请输入正确的邮箱地址'
            >
              <Input htmlType="email" name="email" />
            </FormItem>
            <FormItem
              label='网站地址'
              {...formItemLayout}
              required
              requiredMessage='请输入正确的网站地址'
              format="url"
            >
              <Input
                name="siteUrl"
                type="url"
                placeholder="https://alibaba.github.io/ice"
              />
            </FormItem>

            <FormItem
              label='Github'
              {...formItemLayout}
              required
              requiredMessage='请输入正确的 GitHub 账号'
              format="url"
            >
              <Input
                type="url"
                name="githubUrl"
                placeholder="https://github.com/alibaba/ice"
              />
            </FormItem>

            <FormItem
              label='Twitter'
              {...formItemLayout}
              required
              requiredMessage='请输入正确的 Twitter 账号'
              format="url"
            >
              <Input name="twitterUrl" placeholder="https://twitter.com" />
            </FormItem>

            <FormItem
              label='自我描述'
              {...formItemLayout}
            >
              <Input.TextArea placeholder="请输入描述..." />
            </FormItem>
            <Row style={{ marginTop: 20 }}>
              <Col offset="3">
                <Form.Submit
                  type="primary"
                  style={{ width: 100 }}
                  validate
                  onClick={validateAllFormField}
                >
                  提交
                </Form.Submit>
              </Col>
            </Row>
          </div>
        </Form>
      </IceContainer>
    </div>
  );
});

