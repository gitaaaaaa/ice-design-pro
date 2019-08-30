import React, { Component } from "react";
import { Tab, Icon } from "@alifd/next";
import styles from "./index.module.scss";

const panes = [
  { tab: "Mail", key: 1, closeable: false },
  { tab: "Message", key: 2, closeable: true },
  { tab: "Setting", key: 3, closeable: true },
  { tab: "Unread", key: 4, closeable: true },
  { tab: "Message", key: 5, closeable: true },
  { tab: "Setting", key: 6, closeable: true }
];

class TabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panes: panes,
      activeKey: panes[0].key
    };
  }

  /*eslint-disable eqeqeq */
  remove(targetKey) {
    let activeKey = this.state.activeKey;
    const panes = [];
    this.state.panes.forEach(pane => {
      if (pane.key != targetKey) {
        panes.push(pane);
      }
    });

    if (targetKey == activeKey) {
      activeKey = panes[0].key;
    }
    this.setState({ panes, activeKey });
  }

  onClose = targetKey => {
    this.remove(targetKey);
  };

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  addTabpane = () => {
    this.setState(prevState => {
      const { panes } = prevState;
      panes.push({ tab: "new tab", key: Math.random(), closeable: true });
      return { panes };
    });
  };

  getTabItem() {
    return (
      this.state.panes.map(item => (
        <Tab.Item
          title={item.tab}
          key={item.key}
          closeable={item.closeable}
        ></Tab.Item>
      ))
    );
  }

  render() {
    const state = this.state;
    return (
        <Tab
          shape="wrapped"
          size="small"
          contentClassName={styles.menuTabContent}
          navClassName={styles.menuTabNav}
          navStyle={{backgroundColor:'#ffffff'}}
          tabPosition="bottom"
          activeKey={state.activeKey}
          onChange={this.onChange}
          onClose={this.onClose}
        >
          {this.getTabItem()}
        </Tab>
    );
  }
}

export default TabMenu;
