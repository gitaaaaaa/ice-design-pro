import React, { useState, useEffect, useRef } from "react";
import FoundationSymbol from "@icedesign/foundation-symbol";
import { Link, withRouter } from "react-router-dom";
import { Nav } from "@alifd/next";
import stores from "@/stores/index";
import { asideMenuConfig } from "@/config/menu.js";
import styles from "./index.module.scss";

const SubNav = Nav.SubNav;
const NavItem = Nav.Item;

/**
 * 二级导航
 */
function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);
    if (childrenItems && childrenItems.length > 0) {
      return (
        <SubNav
          key={index}
          icon={
            item.icon ? (
              <FoundationSymbol type={item.icon} size="small" />
            ) : null
          }
          label={
            <span className="ice-menu-collapse-hide">
              {item.name}
            </span>
          }
        >
          {childrenItems}
        </SubNav>
      );
    }
    return null;
  }
  return (
    <NavItem key={item.path}>
      <Link to={item.path}>
        {item.name}
      </Link>
    </NavItem>
  );
}

/**
 * 获取菜单项数据
 */
function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => {
      return getSubMenuOrItem(item, index);
    });
}
/**
 * 获取默认展开菜单项
 */
function getDefaultOpenKeys(location = {}) {
  const { pathname } = location;
  const menus = getNavMenuItems(asideMenuConfig);

  let openKeys = [];
  if (Array.isArray(menus)) {
    asideMenuConfig.forEach((item, index) => {
      if (pathname.startsWith(item.path)) {
        openKeys = [`${index}`];
      }
    });
  }

  return openKeys;
}

const Aside = withRouter(props => {
  const expandAside = stores.useStore("expandAside");
  const { collapse, toggle } = expandAside;

  const { location } = props;
  const { pathname } = location;
  const defaultOpenKeys = getDefaultOpenKeys(location);
  const [openKeys, setOpenKeys] = useState(collapse ? [] : defaultOpenKeys);
  const [mode, setMode] = useState("inline");
  const cacheOpenKeys = useRef(openKeys);

  useEffect(() => {
    if (collapse) {
      cacheOpenKeys.current = openKeys;
      setMode("popup");
      setOpenKeys([]);
    } else {
      setMode("inline");
      setOpenKeys(cacheOpenKeys.current);
    }
  }, [collapse]);

  function onOpenChange(keys) {
    setOpenKeys(keys);
  }

  // 点击打开tab
  function onMenuItemClick(key, item, event) {
    console.log(key)
    console.log(item);
    console.log(event);
  }

  function onSelect(selectedKeys,item,extra){
    // selectedKeys: {Array} 选中的所有菜单项的值
    // item: {Object} 选中或取消选中的菜单项
    // extra: {Object} 额外参数
    // extra.select: {Boolean} 是否是选中
    // extra.key: {Array} 菜单项的 key
    // extra.label: {Object} 菜单项的文本
    // extra.keyPath: {Array} 菜单项 key 的路径
    console.log(selectedKeys)
    console.log(item);
    console.log(extra);
    console.log(extra.key);
    console.log(extra.label);
    console.log(extra.keyPath);
  }

  return (
    <div
      className={`${styles.iceDesignLayoutAside} ${styles.iceDesignProAside}`}
    >
      <Nav
        style={{ width: collapse ? "60px" : "200px" }}
        mode={mode}
        iconOnly={collapse}
        hasArrow={!collapse}
        triggerType={collapse ? "hover" : "click"}
        activeDirection={null}
        openKeys={openKeys}
        selectedKeys={[pathname]}
        defaultSelectedKeys={[pathname]}
        onOpen={onOpenChange}
        onItemClick={onMenuItemClick}
        onSelect={onSelect}
      >
        {getNavMenuItems(asideMenuConfig)}
      </Nav>
    </div>
  );
});

export default Aside;
