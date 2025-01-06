import React,{ useState,useEffect  } from "react";
import { Table, Button } from "antd";
export default function Permission(){
    const [dataSource,setDataSource]=useState([])
  
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        render:(value, record)=>{
            return (
                <button onClick={()=>editItem(record)}>编辑</button>
            )
        }
      },
    ];

    const getData=()=>{
        setTimeout(() => {
            setDataSource([{
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            }])
        }, 1000);
    }

    const editItem=(item)=>{
        console.log(item);
    }

    useEffect(()=>{
        getData();
    },[])

    return (
        <div>
            <div>权限管理</div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
        
    )
}