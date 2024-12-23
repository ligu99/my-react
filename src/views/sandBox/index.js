import React from "react";
import { HashRouter,Route,Switch,Redirect } from "react-router-dom";

import SideMenu from "../../components/sideMenu"
import TopHeader from "../../components/topHeader"
import Home from "./home"
import UserList from "./user";
import NotFound from "../404"
export default function SandBox(){
    return (
        <div>
            <SideMenu></SideMenu>
            <TopHeader></TopHeader>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/user-manage/list" component={UserList}></Route>
                {/* 如果是/，重定向到/home */}
                <Redirect from="/" to="/home" exact></Redirect>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    )
}