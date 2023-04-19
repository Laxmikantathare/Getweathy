import ReactCountryFlag from "react-country-flag"
import React from 'react';
import "./Style.css";


export default function Body(props) {
  setInterval(mytimer,1000);
  function mytimer() {
   const time = new Date();
   const TimeString= document.getElementById('timer');
   if(TimeString)
  TimeString.innerHTML=time.toLocaleTimeString();
  } 

  return (
  <>
  <div className='body1' >
    <div className="text-center imag">
  <img src="weather-150.png" className="rounded " alt="..."/>
  </div>
    <div className=" text-light simple "><h3><p>Get<span className="weathy">weath</span>y</p></h3>
    <div className="subline">Get the weather details of your city.</div>
    </div>


  <div className="container d-flex justify-content-center ">
  <div className="d-flex align-items-center  mt-3 chaukon ">
        <input className="form-control  place"  onKeyDown={props.searchloc} value={props.location} onChange={event => props.setlocation(event.target.value)}type="text" placeholder="Enter City Name..." aria-label="Search"/> 
      </div>
      </div>
      
    {props.data.name !== undefined &&

  <div className="container mt-2">
      <div className="d-flex justify-content-center">
    <div className=" chaukon123 card center " >
      <div className=" p-3 text-light chaukonrang" >
            <div className="row">
          <div className="col-8">
          < h4 className="card-title"><span className=" location"><p>{props.data.name} , {props.data.sys ? props.data.sys.country: null } 
          <ReactCountryFlag className="mx-3 mb-1"style={{height:'33px',width:'38px'}} countryCode={props.data.sys.country} svg /></p> </span></ h4>
        <div className="temp">< h5> <p>Temprature  :<span className="strong"> {props.data.main ? props.data.main.temp: null } °C </span></p></ h5></div>
        <div className="desc">< h5> <p>Weather :<span className="strong gryell"> {props.data.weather ? props.data.weather[0].main: null } </span></p></ h5></div>
        <div className="humadity">< h5> <p>Humidity :<span className="strong"> {props.data.main ?props.data.main.humidity: null } % </span></p></ h5></div>
        <div className="feel">< h5> <p>Feels Like :<span className="strong gryell"> {props.data.main ? props.data.main.feels_like: null } °C </span></p></ h5></div>
        <div className="wind">< h5> <p>Wind Speed :<span className="strong"> {props.data.wind ? props.data.wind.speed: null } m/s </span></p></ h5></div>
        <div className="icon1"><h5><p><img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png` } alt=""/> </p></h5></div>
        <div className="timer"><h5> <p>Current Time  :  <span ><span className=" text-light"id='timer'></span></span></p></h5></div>
        </div>
        <div className="col-4"> <div ><img className="icon" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png` } alt=""/></div></div>
        </div>
      </div>
  </div>
</div>
  </div>
}


</div>
  </>
  )
}
