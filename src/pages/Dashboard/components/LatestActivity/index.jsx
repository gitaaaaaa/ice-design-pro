import React from 'react';
import Card from '../Card';
import BarChart from './BarChart';

function LatestActivity() {

  const dataSource = Array.from({ length: 10 }).map((item, index) => {
    return {
      name: `${index + 1}` + ". 淘宝造物节",
      num: parseInt(Math.random() * 1000, 10),
    };
  });

  const columns = [
    {
      title: "空间名称",
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: "发布活动次数",
      dataIndex: 'num',
      key: 'num',
    },
  ];

  return (
    <Card
      title="最新发布活动"
      subTitle="最近一周 TOP 10"
      summary={[
        {
          label: "本周发布活动数",
          value: '123',
        },
        {
          label: "累计发布活动数",
          value: '23,239',
        },
      ]}
      link={{
        text: "发布活动明细",
        href: '#',
      }}
      dataSource={dataSource}
      columns={columns}
      content={<BarChart />}
    />
  );
}

export default LatestActivity;
