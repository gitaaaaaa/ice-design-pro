import React from 'react';
import { Grid } from '@alifd/next';
import LineChart from './LineChart';
import PieChart from './PieChart';
import ProjectList from './ProjectList';

const { Row, Col } = Grid;

export default function Overview() {
  return (
    <Row wrap>
      <Col l="16" style={{paddingRight:"20px"}}>
        <ProjectList />
      </Col>
      <Col l="8">
        <PieChart />
        <LineChart />
      </Col>
    </Row>
  );
}
