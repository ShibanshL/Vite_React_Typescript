import React,{useState, useEffect} from 'react'
import {api2} from '../Component/API2'
import {api3} from '../Component/API3'
import Mantine_loader from '../Component/Mantine_loader'
// import './Display_1.css'
import {  Group, Text, Card,  Divider, MediaQuery } from '@mantine/core';

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
            <MediaQuery query="(max-width: 1100px)" styles={{display:'flex',alignItems:'center', justifyContent:'baseline', flexDirection:'row',/* background:'pink'*/}}>
              <Group direction='row' style={{}}>
                <Group direction='column' style={{/*width:'43vw', height:'70vh'*/}}>
                  <Group direction='column' style={{/*width:'100%', height:'50%'*/}}>
                    <MediaQuery query="(max-width: 1100px) and (min-width:500px)" styles={{fontSize:'3em'}}>
                      <MediaQuery query="(max-width: 500px)" styles={{fontSize:'2em !important'}}>
                        <Text size="lg" style={{fontSize:'5em'/*, marginTop:'-2vw'*/}}>{data_R2?.location.name}</Text>
                      </MediaQuery>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 1100px) and (min-width:500px)" styles={{fontSize:'2em'}}>
                      <MediaQuery query="(max-width: 500px)" styles={{fontSize:'1em !important'}}>
                        <Text size="md" style={{fontSize:'3em'/*, marginTop:'-2vw'*/}}>{data_R2?.location.country}</Text>
                      </MediaQuery>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 1100px) and (min-width:500px)" styles={{fontSize:'2em'}}>
                      <MediaQuery query="(max-width: 500px)" styles={{fontSize:'1em !important'}}>
                        <Text size="md" style={{fontSize:'1em'}}>{data_R3?.forecast.forecastday[0].date}</Text>
                      </MediaQuery>
                    </MediaQuery>
                  </Group>
                  <Group direction='row' style={{/*width:'100%', height:'40%',*/display:'flex',alignItems:'center', justifyContent:'space-evenly' }}>
                    <Group direction='column' style={{display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                      <MediaQuery styles={{width:'6vw'}}>
                        <img src="./assets/Wind.svg" alt="err" style={{width:'8vw'}} />
                      </MediaQuery>
                      <MediaQuery styles={{width:'100px'}}>
                      <Divider size='xs' style={{ background:'black', height:'2px', width:'150px'}}/>
                      </MediaQuery>
                      <Text size='xl'>{data_R?.wind.speed}KMPH</Text>
                    </Group>
                    <Group direction='column' style={{display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                      <MediaQuery styles={{width:'6vw'}}>
                        <img src="./assets/Clouds.svg" alt="err" style={{width:'8vw'}}/>
                      </MediaQuery>
                      <MediaQuery styles={{width:'100px'}}>
                        <Divider size='xs' style={{ background:'black', height:'2px', width:'150px'}}/>
                      </MediaQuery>
                      <Text size='xl'>{data_R?.main.humidity}%</Text>
                    </Group>
                  </Group>
                </Group>
                <MediaQuery query="(max-width:500px)" styles={{display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                  <Group direction='column' style={{/*width:'42vw', height:'70vh'*/}}>
                    <Group direction='column' style={{/*width:'100%', height:'40%',*/ display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                    <MediaQuery query="(max-width: 1100px) and (min-width:500px)"  styles={{fontSize:'4em !important'}}>
                      <MediaQuery query="(max-width: 500px)" styles={{fontSize:'2em !important'}}>
                        <Text size='xl' style={{fontSize:'8em', /*marginTop:'-18vh'*/}}>{data_R2?.current.temp_c}°</Text>
                      </MediaQuery>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 1100px) and (min-width:500px)"  styles={{fontSize:'2em !important'}}>
                      <MediaQuery query="(max-width: 500px)" styles={{fontSize:'1em !important'}}>
                        <Text size='xl' style={{fontSize:'4em', /*marginTop:'-5vh'*/}}>{data_R2?.current.temp_f}°F</Text>
                      </MediaQuery>
                    </MediaQuery>
                    </Group>
                    <Group direction='row'>
                      <Card style={{background:'none',display:'flex',alignItems:'center', justifyContent:'center'}}>
                          {data_R3?.forecast.forecastday.map(e => {return( 
                              <>
                                <Group direction='column' style={{margin:'15px', padding:'5px', textAlign:'center',/* height:'230px', width:'170px',*/ background:'rgba(255,255,255,0.5)', borderRadius:'10px' ,display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                                    <Text size='xl'key={e.day.avgtemp_c}>{e.day.avgtemp_c}&deg;C</Text>
                                    <Group direction='column' style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                                      <Text size='md'key={e.day.condition.text}>{e.day.condition.text}</Text>
                                      <Text size='md'key={e.date}>{e.date}</Text>
                                    </Group>
                                    <img src={e.day.condition.icon} alt="err" />

                                </Group>
                              </>
                        )})}
                      </Card>
                    </Group>
                  </Group>
                </MediaQuery>
              </Group>
            </MediaQuery>

          </>
        )
      }
}

export default Display_1