import React ,{useState} from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import Body from './Components/Body';

import Axios from 'axios';

function App() {
  const [data, setdata] = useState({})
  const [location, setlocation] = useState('')

const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
console.log(process.env.REACT_APP_API_KEY)
console.log(url)


const searchloc=(event) =>{
  if(event.key === 'Enter'){
  Axios.get(url).then((response)=>{
    setdata(response.data)
  })
  setlocation('')
}
}
  return (
   <>
   <Body searchloc={searchloc} setdata={setdata} setlocation={setlocation} location={location} data={data}  />
   </>
  );
}

export default App;
