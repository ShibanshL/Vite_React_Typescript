import React,{useState, useEffect} from 'react'
import {api2} from '../Component_2/API2'
import {api3} from '../Component_2/API3'
import {  Group, Text, Card,  Divider, MediaQuery, Grid } from '@mantine/core';

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
          setData_R(kdata)
          setName(kdata.name)
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
          console.log('fetch_R3',kdata)
          setData_R2(kdata)
          console.log('New api : ',kdata)
          setData_R3(kdata)
          console.log('pls',data_R3)
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
          <Group style={{marginTop:'10vh'}}>
             Loading
          </Group>
          </>
        )
       
      }
      else{
        return(
          <>
          <Grid>
            <Grid.Col span={6}>
              <Group><Text  gradient={{ from: 'red', to: 'cyan', deg: 45 }}
                            size="xl"
                            weight={700}>{data_R2?.location.name}</Text></Group>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group><Text size='xl' style={{ /*marginTop:'-18vh'*/}}>{data_R2?.current.temp_c}°</Text></Group>
            </Grid.Col>
          </Grid>
          </>
        )
      }
}

export default Display_1