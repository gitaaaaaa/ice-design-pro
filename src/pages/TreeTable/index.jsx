import React, { Component, useState, useEffect } from 'react';
import { Grid, Select, Tree } from '@alifd/next';
import IcePanel from '@icedesign/panel';
import AuthorityTable from './components/AuthorityTable';
import SimpleFormDialog from './components/SimpleFormDialog';

const { Row, Col } = Grid;
const dataSource = [
  { label: 'option1', value: 'option1' },
  { label: 'option2', value: 'option2' },
  { label: 'option3', value: 'option3' }
];
const TreeNode = Tree.Node;


const handleChange = value => {
  console.log('handleChange: ', value);
};

export default function TreeTable() {
  return (
    <div role="grid">
      <Row>
        <Col fixedSpan="10">
          <IcePanel style={{ marginBottom: '10px' }}>
            <IcePanel.Body>
              <Select style={{ width: '100%' }} dataSource={dataSource} showSearch={true} onChange={handleChange} />
              <Tree defaultExpandAll showLine>
                <TreeNode label="Trunk">
                  <TreeNode label="Branch">
                    <TreeNode label="Branch">
                      <TreeNode label="Leaf" />
                    </TreeNode>
                    <TreeNode label="Leaf" />
                  </TreeNode>
                  <TreeNode label="Branch">
                    <TreeNode label="Leaf" />
                    <TreeNode label="Leaf" />
                  </TreeNode>
                </TreeNode>
              </Tree>
            </IcePanel.Body>
          </IcePanel>
        </Col>
        <Col>
          {/* 权限管理类的表格 */}
          <AuthorityTable />
          {/* 简单的表单弹窗 */}
          {/* <SimpleFormDialog /> */}
        </Col>
      </Row>
    </div>
  );
}