//1 Import Area
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

//2. Function Defination Area
function App() {
  //1. Hooks Area
  //creating IP state
    const [ip,setIP] = useState('');


  //2. Function Area
  //creating function to load ip address from the API
    const getData = async()=>{
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data);
      setIP(res.data.IPv4)
    }

    useEffect(()=>{
        //passing getData method to the lifecycle method
        getData()
    },[])

  //3. Return Area
  return (
    <div className = "App">
            <h2>Your IP Address is</h2>
            <h4>{ip}</h4>
    </div>
  );
}

//3. Export Area
export default App;
