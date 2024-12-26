import React,{ useState,useEffect  }  from "react";
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
        key: 'a',
        icon: <UserOutlined />,
        label: 'nav 1',
        path: "/home"
    },
    {
        key: 'b',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
        path: "/user-manage/list"
    },
    {
        key: 'c',
        icon: <UploadOutlined />,
        label: 'nav 3',
        children:[
            {
                key: 'c-1',
                icon: <UploadOutlined />,
                label: 'nav 3-1',
                path: "/permission",
                prevkey:"c"
            }
        ]
    },
]
function SideMenu(props){
    const [highMenu, setHighMenu]=useState("");
    const [openKeys, setOpenKeys]=useState("");
    const [loading, setLoading]=useState(false);
    const onClickMenu=(menuItem)=>{
        console.log(menuItem);
        let menuArr = [];
        menuList.forEach(x=>{
            if(x.children && x.children.length>0){
                x.children.forEach(x=>{
                    menuArr.push(x);
                })
            }else{
                menuArr.push(x);
            }
        })
        const currMenu=menuArr.filter(x=>x.key===menuItem.key)
        props.history.push({
            pathname:currMenu[0].path
        })
        setHighLightMenu(currMenu[0].path)
    }
    // 设置菜单高亮
    const setHighLightMenu=(path="")=>{
        const pathname = path || props.location.pathname
        let menuArr = [];
        menuList.forEach(x=>{
            if(x.children && x.children.length>0){
                x.children.forEach(x=>{
                    menuArr.push(x);
                })
            }else{
                menuArr.push(x);
            }
        })
        const currMenu=menuArr.filter(x=>x.path===pathname)
        setHighMenu(currMenu[0].key)
        if(currMenu[0].prevkey){
            setOpenKeys(currMenu[0].prevkey);
        }
        setLoading(true)
    }
    useEffect(()=>{
        setHighLightMenu()
    },[])
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            {loading && <Menu
            onClick={onClickMenu}
            defaultOpenKeys={[openKeys]}
            theme="dark"
            mode="inline"
            selectedKeys={[highMenu]}
            items={menuList}
            />}
        </Sider>
    )
}

export default withRouter(SideMenu)