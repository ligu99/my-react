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