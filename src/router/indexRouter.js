import React from "react";
import { HashRouter,Route,Switch,Redirect } from "react-router-dom";

import Login from "../views/login";
import NewsSandBox from "../views/sandBox"

export default function indexRouter(){

    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" render={()=>{
                    return localStorage.getItem("token")?
                    <NewsSandBox></NewsSandBox>:
                    <Redirect to="/login"></Redirect>
                }}></Route>
            </Switch>
        </HashRouter>
    )
}