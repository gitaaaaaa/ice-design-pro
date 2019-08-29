import React from 'react';
import { Grid, Form, Input, Select, DatePicker, TreeSelect, Switch } from '@alifd/next';
import styles from './index.module.scss';

const FormItem = Form.Item;
const { Row, Col } = Grid;
const RangePicker = DatePicker.RangePicker;
const TreeNode = TreeSelect.Node;
const formItemLayout = {
  labelCol: { fixedSpan: 4 }
};

class TableFilter extends React.Component {
  handleSubmit(value) {
    console.log('Form values：', value);
  }
  render() {
    return (
      <Form>
        <Row gutter="15">
          <Col>
            <FormItem {...formItemLayout} label="default">
              <Input placeholder="请输入" name="default" />
            </FormItem>
          </Col>
          <Col>
            <FormItem {...formItemLayout} label="Select:">
              <Select style={{ width: '100%' }} name="select">
                <Select.Option value="jack">jack</Select.Option>
                <Select.Option value="lucy">lucy</Select.Option>
                <Select.Option value="disabled" disabled>disabled</Select.Option>
                <Select.Option value="hugohua">hugohua</Select.Option>
              </Select>
            </FormItem>
          </Col>
          <Col>
            <FormItem {...formItemLayout} label="TreeSelect:">
              <TreeSelect treeDefaultExpandAll onChange={this.handleChange} style={{ width: '100%' }}>
                <TreeNode key="1" value="1" label="Component">
                  <TreeNode key="2" value="2" label="Form">
                    <TreeNode key="4" value="4" label="Input" />
                    <TreeNode key="5" value="5" label="Select" disabled />
                  </TreeNode>
                  <TreeNode key="3" value="3" label="Display">
                    <TreeNode key="6" value="6" label="Table" />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
            </FormItem>
          </Col>

        </Row>
        <Row gutter="15">
          <Col>
            <FormItem {...formItemLayout} label="Datepicker：">
              <DatePicker name="timeDate" defaultValue="" style={{ width: '100%' }}/>
            </FormItem>
          </Col>
          <Col>
            <FormItem {...formItemLayout} label="RangePicker:">
              <RangePicker name="rangeDate" defaultValue={["", ""]} style={{ width: '100%' }} />
            </FormItem>
          </Col>

          <Col>
            <FormItem {...formItemLayout} label="Switch:">
              <Switch name="switch" defaultChecked />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: 'right' }}>
            <Form.Submit type="primary" style={{ marginRight: '5px' }} onClick={this.handleSubmit.bind(this)}>查询</Form.Submit>
            <Form.Reset>重置</Form.Reset>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default TableFilter