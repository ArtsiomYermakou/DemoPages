import Menu from "antd/lib/menu";
import {Header} from "antd/lib/layout/layout";
import React from "react";
import {NavLink} from "react-router-dom";

export const HeaderWrap = () => {
    return (
        <Header>
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign: "center"}}>
                <Menu.Item key="2">
                    <NavLink to={"/"}>
                        Start Page
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="1" style={{marginLeft: 50, marginRight: 50}}>
                    <NavLink to={"/stepPage"}>
                        Step Page
                    </NavLink></Menu.Item>
                <Menu.Item key="3">
                    <NavLink to={"/errorPage"}>
                        Error Page
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Header>
    )
}


