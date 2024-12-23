import React,{ useState } from "react";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header } = Layout;
export default function TopHeader(props){
    const handleSetCollapsed = () => {
      props.setCollapsed();
    };
    return (
        <Header style={{background: "#fff"}}>
          <Button
            type="text"
            icon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => handleSetCollapsed()}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
    )
}