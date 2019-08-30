import React, { useEffect } from "react";
import { Balloon, Nav, Message } from "@alifd/next";
import IceImg from "@icedesign/img";
import FoundationSymbol from "@icedesign/foundation-symbol";
import { Link, withRouter } from "react-router-dom";
import { headerMenuConfig } from "@/config/menu.js";
import stores from "@/stores/index";
import { useRequest } from "@/utils/request";
import { userLogout } from "@/config/dataSource";
import Logo from "../Logo";

import styles from "./index.module.scss";

function Header(props) {
  const { request } = useRequest(userLogout);
  const userProfile = stores.useStore("userProfile");
  const expandAside = stores.useStore("expandAside");

  function handleSetting() {
    props.history.push("/account/setting");
  }

  async function handleLogout() {
    try {
      await request();
      Message.success("已登出");
      props.history.push("/user/login");
    } catch (err) {
      console.error(err);
    }
  }

  const { userinfo, fetchData } = userProfile;
  const { name, department, avatar } = userinfo;
  const { toggle } = expandAside;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.iceDesignLayoutHeader}>
      <div className={styles.headerLeft}>
        <Logo />
        <img
          onClick={() => toggle()}
          className={styles.expandIcon}
          width="20"
          height="20"
          src="https://img.alicdn.com/tfs/TB19Q3Qa.T1gK0jSZFhXXaAtVXa-32-32.svg"
          alt="expand icon"
        />
      </div>
      {/* Header 菜单项 begin */}
      <div className={styles.headerRight}>
        {headerMenuConfig && headerMenuConfig.length > 0 ? (
          <div className={styles.iceDesignLayoutHeaderMenu}>
            <Nav direction="hoz" type="secondary" selectedKeys={[]}>
              {headerMenuConfig.map((nav, idx) => {
                const linkProps = {};
                if (nav.newWindow) {
                  linkProps.href = nav.path;
                  linkProps.target = "_blank";
                } else if (nav.external) {
                  linkProps.href = nav.path;
                } else {
                  linkProps.to = nav.path;
                }
                return (
                  <Nav.Item key={idx}>
                    {linkProps.to ? (
                      <Link {...linkProps}>
                        {nav.icon ? (
                          <FoundationSymbol type={nav.icon} size="small" />
                        ) : null} {" "}
                        {nav.name}
                      </Link>
                    ) : (
                      <a {...linkProps}>
                        {nav.icon ? (
                          <FoundationSymbol type={nav.icon} size="small" />
                        ) : null} {" "}
                        {nav.name}
                      </a>
                    )}
                  </Nav.Item>
                );
              })}
            </Nav>
          </div>
        ) : null}
        {/* Header 菜单项 end */}

        <div className={styles.headerAction}>
          {/* Header 右侧内容块 */}
          <Balloon
            trigger={
              <div className={styles.iceDesignHeaderUserpannel}>
                <IceImg
                  height={40}
                  width={40}
                  src={avatar}
                  className={styles.userAvatar}
                />
                <div className={styles.userProfile}>
                  <span className={styles.userName}>{name}</span>
                  <br />
                  <span className={styles.userDepartment}>{department}</span>
                </div>
                <FoundationSymbol
                  type="angle-down"
                  size="small"
                  className={styles.iconDown}
                />
              </div>
            }
            closable={false}
            className={styles.userProfileMenu}
          >
            <ul>
              <li
                className={styles.userProfileMenuItem}
                onClick={handleSetting}
              >
                <FoundationSymbol type="repair" size="small" />
                设置
              </li>
              <li className={styles.userProfileMenuItem} onClick={handleLogout}>
                <FoundationSymbol type="person" size="small" />
                退出
              </li>
            </ul>
          </Balloon>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
