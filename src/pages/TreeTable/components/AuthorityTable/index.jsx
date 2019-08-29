import React from 'react';
import IcePanel from '@icedesign/panel';
import TableFilter from './TableFilter';
import CustomTable from './CustomTable';

export default function Index() {
  return (
    <div>
      <IcePanel style={{ marginBottom: '15px', marginLeft: '15px' }}>
        <IcePanel.Body>
          <TableFilter />
        </IcePanel.Body>
      </IcePanel>
      <IcePanel style={{ marginLeft: '15px' }}>
        {/* <IcePanel.Header style={{ backgroundColor: '#fff' }}>
          <strong>表名</strong>
        </IcePanel.Header> */}
        <IcePanel.Body style={{ padding: 0 }}>
          <CustomTable />
        </IcePanel.Body>
      </IcePanel>
    </div>
  );
}
