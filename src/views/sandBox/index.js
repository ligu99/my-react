import React,{ useState } from "react";
import { HashRouter,Route,Switch,Redirect } from "react-router-dom";
import { Flex, Layout } from 'antd';
const { Content } = Layout;

import SideMenu from "../../components/sideMenu"
import TopHeader from "../../components/topHeader"
import Home from "./home"
import UserList from "./user";
import Permission from "./permission";
import NotFound from "../404"
export default function SandBox(){
    const [collapsed, setCollapsed] = useState(false);
    const setCollapsedIndex=()=>{
        setCollapsed(!collapsed)
    }
    return (
        <Layout>
            <SideMenu collapsed={collapsed}></SideMenu>
            <Layout>
                <TopHeader collapsed={collapsed} setCollapsedIndex={setCollapsedIndex}></TopHeader>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background:"#fff"
                    }}
                    >
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/user-manage/list" component={UserList}></Route>
                        <Route path="/permission" component={Permission}></Route>
                        {/* 如果是/，重定向到/home */}
                        <Redirect from="/" to="/home" exact></Redirect>
                        <Route path="*" component={NotFound}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}