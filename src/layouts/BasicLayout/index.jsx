import React, { useState, useEffect } from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Aside from './components/Aside';
import TabMenu from './components/TabMenu';
import Footer from './components/Footer';
import AsideDrawer from './components/AsideDrawer';

export default function BasicLayout(props) {
  return (
    <Layout fixable={true}>
      <Layout.Header>
        <Header/>
      </Layout.Header>
      
      <Layout.Section style={{backgroundColor:'rgb(238, 238, 238)'}}>
        <Layout.Aside>
          <Aside />
        </Layout.Aside>
        {/* <Layout.Main scrollable>
          <TabMenu />
          <div style={{margin: '15px 15px 0 15px' }}>
            { props.children }
          </div>
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </Layout.Main> */}
      </Layout.Section>
      {/* <AsideDrawer/> */}
    </Layout>
  )
}
