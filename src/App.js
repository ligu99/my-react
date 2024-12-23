import "./App.css"
import { useEffect } from 'react';
import IndexRouter from './router/indexRouter';
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get("/devApi/gmeeting/version").then(res=>{
      console.log(res);
    },[])
  })
  return (
    <IndexRouter></IndexRouter>
  );
}

export default App;
