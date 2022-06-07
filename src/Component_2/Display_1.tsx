import React,{useState, useEffect} from 'react'
import {api2} from '../Component/API2'
import {api3} from '../Component/API3'
import Mantine_loader from '../Component/Mantine_loader'
// import './Display_1.css'
import {  Group, Text, Card } from '@mantine/core';

interface api {
    base: string
    clouds: {all: number}
    cod: number
    coord: {lon: number, lat: number}
    dt: number
    id: number
    main: {
      feels_like: number
      grnd_level: number
      humidity: number
      pressure: number
      sea_level: number
      temp: number
      temp_max: number
      temp_min: Number}
    name: string
    sys: {type: number, id: number, country: string, sunrise: number, sunset: number}
    timezone: number
    visibility: number
    weather: [{id:number, main: string, description: string, icon: string}]
    wind: {speed:number, deg: number, gust: number}
  }

interface PropsN {
    check:string
  }
function Display_1({check}:PropsN) {
    const [find, setFind] = useState<Boolean>(false)
    const [data_R, setData_R] = useState<api>()
    const [data_R2, setData_R2] = useState<api2>()
    const [data_R3, setData_R3] = useState<api3>()
    const [name,setName] = useState<string>('')
    let city_name = check
    let t:number|undefined;

    async function fetch_R(){
        try{
          let urlc =`https://api.openweathermap.org/data/2.5/weather?q=`+city_name+`&limit=5&appid=e0acb40649748d907810e7cb7e2bb994`
          var res = await fetch(urlc)
          let kdata = await res.json()
          console.log('fetch_R',kdata)
          // setFind(true)
          // setTimeout(()=>{
            setData_R(kdata)
            setName(kdata.name)
          // },5000)
         setTimeout( 
           ()=>{
            setFind(true)
           }
          ,1500)
        }
        catch(e){
          console.log(e)
        }
      }

      async function fetch_R1(){
        try {
          let url = 'http://api.weatherapi.com/v1/current.json?key=e69179dbcaf74929a78121725220206&q='+city_name+'&aqi=no'
          var res = await fetch(url)
          let kdata = await res.json()
          console.log('fetch_R1',kdata)
          setFind(true)
          setData_R2(kdata)
          setFind(false)
          // console.log('New api : ',kdata)
        } 
        catch (e) {
          console.log(e)
        }
      }
  
      async function fetch_R3(){
        try {
          let url = 'http://api.weatherapi.com/v1/forecast.json?key=e69179dbcaf74929a78121725220206&q='+city_name+'&days=10&aqi=no&alerts=no'
          var res = await fetch(url)
          let kdata = await res.json()
          // setFind(false)
          console.log('fetch_R3',kdata)
          setData_R2(kdata)
          console.log('New api : ',kdata)
          setData_R3(kdata)
          console.log('pls',data_R3)
          // setFind(true)
        } 
        catch (e) {
          console.log(e)
        }
      }

      useEffect(() => {
        fetch_R()
        fetch_R1()
        setTimeout(
            () => 
            {
                fetch_R3()
            }
        ,2000)
            },[city_name]
    )


    if(find==false){
        return( 
          <>
          <div className="Loading_Ani">
            {/* <Loading /> */}
            {/* <Mantine_loader /> */}
            Loading
          </div>
          </>
        )
       
      }
      else{
        return(
          <>
            <Group direction='row' style={{background:'yellow'}}>
              <Group direction='column'>
                <Group direction='column'>
                  <Text size="lg">{data_R2?.location.name}</Text>
                  <Text size="md">{data_R2?.location.country}</Text>
                  <Text size="md">{data_R3?.forecast.forecastday[0].date}</Text>
                </Group>
                <Group direction='row'>
                  <Group direction='column'>
                    <img src="./assets/Wind.svg" alt="err" style={{width:'10vw'}} />
                    <Text size='xl'>{data_R?.wind.speed}KMPH</Text>
                  </Group>
                  <Group direction='column'>
                    <img src="./assets/Clouds.svg" alt="err" style={{width:'10vw'}}/>
                    <Text size='xl'>{data_R?.main.humidity}%</Text>
                  </Group>
                </Group>
              </Group>
              <Group direction='column'>
                <Group direction='column'>
                    <Text size='xl'>{data_R2?.current.temp_c}°</Text>
                    <Text size='xl'>{data_R2?.current.temp_f}°F</Text>
                </Group>
                <Group direction='row'>
                  <Card style={{background:'cyan',display:'flex',alignItems:'center', justifyContent:'center'}}>
                      {data_R3?.forecast.forecastday.map(e => {return( 
                          <>
                            <Group direction='column'>
                                <Text size='xl' key={e.day.avgtemp_c}>{e.day.avgtemp_c}&deg;C</Text>
                                <Text size='xl'key={e.day.condition.text}>{e.day.condition.text}</Text>
                                <Text size='xl'key={e.date}>{e.date}</Text>
                                <img src={e.day.condition.icon} alt="err" />

                            </Group>
                          </>
                    )})}
                  </Card>
                </Group>
              </Group>
            </Group>
          </>
        )
      }
}

export default Display_1