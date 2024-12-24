import React,{ useState }  from "react";
import { withRouter } from 'react-router-dom'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const menuList=[
    {
        key: '1',
        icon: <UserOutlined />,
        label: 'nav 1',
        path: "/home"
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
        path: "/user-manage/list"
    },
    {
        key: '3',
        icon: <UploadOutlined />,
        label: 'nav 3',
        children:[
            {
                key: '3-1',
                icon: <UploadOutlined />,
                label: 'nav 3-1',
                path: "/user-manage/list"
            },
            {
                key: '3-2',
                icon: <UploadOutlined />,
                label: 'nav 3-2',
                path: "/home"
            }
        ]
    },
]
function SideMenu(props){
    const onClickMenu=(menuItem)=>{
        console.log(menuItem.item.props.path);
        if(menuItem.item.props.path){
            props.history.push({
                pathname:menuItem.item.props.path
            })
        }
    }

    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
            onClick={onClickMenu}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={menuList}
            />
        </Sider>
    )
}

export default withRouter(SideMenu)