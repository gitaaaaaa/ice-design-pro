import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Button } from '@alifd/next';
import CellEditor from './CellEditor';
import styles from './index.module.scss';

function EditableTable() {

  const [dataSource, setData] = useState(generatorData());

  function generatorData() {
    return Array.from({ length: 5 }).map((item, index) => {
      return {
        todo: "待办事项" +  `${index + 1}`,
        remark: "备注说明文案" + `${index + 1}`,
        validity: '2017-12-12',
      };
    });
  }

  function renderOrder(value, index) {
    return <span>{index+1}</span>;
  }

  function deleteItem(index) {
    dataSource.splice(index, 1);
    setData([
      ...dataSource,
    ]);
  }

  function renderOperation(value, index) {
    return (
      <Button type="primary" onClick={() => deleteItem(index)}>
        删除
      </Button>
    );
  }

  function changeDataSource(index, valueKey, value) {
    dataSource[index][valueKey] = value;
    setData([
      ...dataSource,
    ]);
  }

  function renderEditor(valueKey, value, index, record) {
    return (
      <CellEditor
        valueKey={valueKey}
        index={index}
        value={record[valueKey]}
        onChange={changeDataSource}
      />
    );
  }

  function addNewItem() {
    const text = "空";
    dataSource.push({
      todo: text,
      remark: text,
      validity: text,
    });
    setData([
      ...dataSource,
    ]);
  }

  return (
    <IceContainer title="待办事项">
      <Table
        dataSource={dataSource}
        hasBorder={false}
        className={styles.editableTable}
      >
        <Table.Column
          width={80}
          title="顺序"
          cell={renderOrder}
        />
        <Table.Column
          width={280}
          title="待办事项"
          cell={(value, index, record) => {
            renderEditor('todo', value, index, record);
          }}
        />
        <Table.Column
          width={240}
          title="备注"
          cell={(value, index, record) => {
            renderEditor('remark', value, index, record);
          }}
        />
        <Table.Column
          width={180}
          title="有效时间"
          cell={(value, index, record) => {
            renderEditor('validity', value, index, record);
          }}
        />
        <Table.Column
          title="操作"
          width={80}
          cell={renderOperation}
        />
      </Table>
      <div onClick={addNewItem} className={styles.addNewItem}>
        + 新增
      </div>
    </IceContainer>
  );
}

export default EditableTable;
