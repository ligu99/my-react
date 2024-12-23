import React from "react";
import Style from "./home.module.scss"
import { Button } from 'antd';
export default function Home(){
    return (
        <div className={Style.home}>
            <Button type="primary">Button</Button>
        </div>
    )
}