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
    <div>
      <IndexRouter></IndexRouter>
    </div>
  );
}

export default App;
