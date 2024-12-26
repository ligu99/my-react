import React , { useEffect,useState } from "react";
import Style from "./home.module.scss"
import { Button } from 'antd';
import axios from '../../../http/axiosInstance';
export default function Home(){
    const [postData, setPostData]=useState([]);
    const getPostData= ()=>{
        axios.get("/posts").then(res=>{
            setPostData(res)
        })
    }
    useEffect(()=>{
        console.log("useEffect was called"); // 记录 useEffect 被调用的信息
        console.log(new Date().toLocaleTimeString()); // 记录当前的时间戳（以本地时间格式）.
    },[])

    return (
        <div className={Style.home}>
            <button onClick={getPostData}>Button</button>
            {postData.map(item=>{
                return (
                    <div key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.views}</div>
                    </div>
                )
            })}
        </div>
    )
}