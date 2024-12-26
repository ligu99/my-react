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
    const [allMenuList, setAllMenuList]=useState([]);
    const [openKeys, setOpenKeys]=useState("");
    const [loading, setLoading]=useState(true);

    // 菜单扁平化
    const getMenuList=()=>{
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
        return menuArr
    }
    // 点击菜单
    const onClickMenu=(menuItem)=>{
        console.log(menuItem);
        const currMenu=allMenuList.filter(x=>x.key===menuItem.key)
        props.history.push({
            pathname:currMenu[0].path
        })
        // 调用设置菜单高亮
        setHighLightMenu(currMenu[0].path)
    }
    // 设置菜单高亮
    const setHighLightMenu=(path="")=>{
        const pathname = path || props.location.pathname
        const currMenu=allMenuList.filter(x=>x.path===pathname)
        setHighMenu(currMenu[0].key)
        // 设置展开菜单
        if(currMenu[0].prevkey){
            setOpenKeys(currMenu[0].prevkey);
        }
        setLoading(false);
    }
    // 加载组件就对菜单列表扁平化
    useEffect(()=>{
        let resArr = getMenuList();
        setAllMenuList(resArr);//setAllMenuList是异步的，所以在后面马上执行setHighLightMenu是没用的，allMenuList还是原来的空数组
    },[])

    // 因为setAllMenuList是异步的，所以在这里依赖allMenuList，进行设置菜单高亮
    useEffect(()=>{
        if(allMenuList.length>0){
            setHighLightMenu();
        }
    },[allMenuList])
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            {!loading && <Menu
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