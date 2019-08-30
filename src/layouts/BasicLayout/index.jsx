import React, { useState, useEffect } from 'react';
import { enquire } from 'enquire-js';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Aside from './components/Aside';
import TabMenu from './components/TabMenu';
import Footer from './components/Footer';
import AsideDrawer from './components/AsideDrawer';

export default function BasicLayout(props) {
  const [isScreen, setIsScreen] = useState('isDesktop');
  // const [collapse, setCollapse] = useState(false);
  /**
   * 注册监听屏幕的变化，可根据不同分辨率做对应的处理
   */
  function enquireScreenRegister() {
    const isMobile = 'screen and (max-width: 720px)';
    const isTablet = 'screen and (min-width: 721px) and (max-width: 1199px)';
    const isDesktop = 'screen and (min-width: 1200px)';

    enquire.register(isMobile, enquireScreenHandle('isMobile'));
    enquire.register(isTablet, enquireScreenHandle('isTablet'));
    enquire.register(isDesktop, enquireScreenHandle('isDesktop'));
  }

  function enquireScreenHandle(type) {
    const handler = {
      match: () => {
        setIsScreen(type);
      },
    };

    return handler;
  }

  useEffect(() => {
    enquireScreenRegister();
  }, []);

  const isMobile = isScreen !== 'isDesktop';
  return (
    <Layout fixable={true}>
      <Layout.Header>
        <Header isMobile={isMobile} />
      </Layout.Header>
      <Layout.Section style={{backgroundColor:'rgb(238, 238, 238)'}}>
        <Layout.Aside>
          <Aside isMobile={isMobile} />
        </Layout.Aside>
        <Layout.Main scrollable>
          <TabMenu />
          <div style={{margin: '15px 15px 0 15px' }}>
            { props.children }
          </div>
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </Layout.Main>
      </Layout.Section>
      <AsideDrawer/>
    </Layout>
  )
}
