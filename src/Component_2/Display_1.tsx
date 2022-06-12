import React,{useState, useEffect} from 'react'
import {api2} from '../Component_2/API2'
import {api3} from '../Component_2/API3'
import { api1 } from './API!';
import {  Group, Text, Card,  Divider, MediaQuery, Grid } from '@mantine/core';


interface PropsN {
    check:string
  }
function Display_1({check}:PropsN) {
    const [find, setFind] = useState<Boolean>(false)
    const [data_R, setData_R] = useState<api1>()
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
          <Grid style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column',fontFamily: 'Poppins', padding:'20px'}}>
           <Grid.Col span={12}>
              <Group direction='column'>
                <Text align="center"  variant="gradient" gradient={{ from: 'pink', to: 'cyan', deg: 45 }} style={{ fontSize:'8vw',fontFamily: 'Poppins'}}>{data_R2?.current.temp_c}°</Text>
                {/* <Text size='sm'   align="center" style={{}}>{data_R2?.current.temp_f}°F</Text> */}
              </Group>
            </Grid.Col>
            <Grid.Col span={12}>
              <Group>
                <Text  style={{fontSize:'1.5vw', margin:0, padding:0 , marginTop:'-2vh',fontFamily: 'Poppins'}}
                            weight={700}>{data_R2?.location.name}</Text></Group>
            </Grid.Col>
            <Grid.Col span={12}>
              <Group><Text  
                            style={{fontSize:'1.5vw', margin:0, padding:0 , marginTop:'0',fontFamily: 'Poppins'}}
                            weight={700}>{data_R2?.location.country}</Text></Group>
            </Grid.Col>
            <Group>
              {data_R3?.forecast.forecastday.map(e => {return( 
                    <>
                        <Card style={{margin:'10px', padding:'5px', textAlign:'center',/* height:'230px', width:'170px',*/ background:'rgba(255,255,255,0.5)', borderRadius:'10px' ,display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                            <Text size='xl'key={e.day.avgtemp_c}>{e.day.avgtemp_c}&deg;C</Text>
                            <Group direction='column' style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                                {/* <Text size='md'key={e.day.condition.text}>{e.day.condition.text}</Text> */}
                                <Text size='md'style={{fontSize:'0.7vw'}} key={e.date}>{e.date}</Text>
                            </Group>
                            <img src={e.day.condition.icon} alt="err" />
                        </Card>
                    </>
              )})}
            </Group>
            <Group>
              <Text style={{fontSize:'2vw'}}>{data_R3?.forecast.forecastday[0].day.condition.text}</Text>
            </Group>
            <Grid style={{background:'yellow', marginTop:'2vh', width:'100%', borderRadius:'15px', padding:'10px'}}>
                <Grid.Col span={6}>
                  <Group direction='column' style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                    <img src='./assets/Wind.svg' alt="err" style={{width:'2.5vw'}}/>
                    <Text>{data_R?.wind.speed}KMPH</Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Group direction='column' style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                    <img src='./assets/Clouds.svg' alt="err" style={{width:'2.5vw'}}/>
                    <Text>{data_R?.main.humidity}%</Text>
                  </Group>
                </Grid.Col>
            </Grid>
          </Grid>
          </>
        )
      }
}

export default Display_1