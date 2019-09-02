import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';
import data from './data';

function TabTable() {
  const [dataSource, setDataSource] = useState(data);
  const [tabKey, setTabKey] = useState('all');
  
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '发布时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '操作',
      key: 'action',
      render: (value, index, record) => {
        return (
          <span>
            <EditDialog
              index={index}
              record={record}
              getFormValues={getFormValues}
            />
            <DeleteBalloon
              handleRemove={() => handleRemove(value, index, record)}
            />
          </span>
        );
      },
    },
  ];

  const tabs = [
    { tab: '全部', key: 'all' },
    { tab: '审核中', key: 'review' },
    { tab: '已发布', key: 'released' },
    { tab: '已拒绝', key: 'rejected' },
  ];


  function getFormValues(dataIndex, values) {
    dataSource[tabKey][dataIndex] = values;
    setDataSource({
      ...dataSource,
    });
  }

  function handleRemove(value, index) {
    dataSource[tabKey].splice(index, 1);
    setDataSource({
      ...dataSource,
    });
  }

  function handleTabChange(key) {
    setTabKey(key);
  }

  return (
    <IceContainer>
      <Tab onChange={handleTabChange}>
        {tabs.map((item) => {
          return (
            <Tab.Item title={item.tab} key={item.key}>
              <CustomTable
                dataSource={dataSource[tabKey]}
                columns={columns}
                hasBorder={false}
              />
            </Tab.Item>
          );
        })}
      </Tab>
    </IceContainer>
  );
}

export default TabTable
