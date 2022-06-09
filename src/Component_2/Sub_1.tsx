import React,{useState} from 'react'
import { Center,Container,Grid, Group, MediaQuery } from '@mantine/core';
// import './Sub_1.css'
import Input_1 from './Input_1';
import Display_Sub_1 from './Display_Sub_1';
import Display_1 from './Display_1';
function Sub_1() 
{
    const [data,setData] = useState<string>('')
    const [check, setCheck] = useState<string>('delhi')
    // check=='delhi'
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
       
    
        if(data)
        {
            setCheck(data)
            setData('')
        }
        else{
            console.log('no')
        }
        


      
    }
    if(check.length==0)
    {
        return (
            <MediaQuery query='(max-width:500px)' styles={{ width:'100vw !important', height:'100vh !important', background:'cyan !important'}}>
                <Container size='xl' style={{ /*width:'100vw', height:'100vh',*/ borderRadius:'25px', backdropFilter:'blur(10px)' }}>
                        <Input_1 data={data} setData={setData} handleSubmit={handleSubmit}/>
                        <Display_Sub_1 />
                </Container>
            </MediaQuery>

          )
    } 
    else{
        return (
            <MediaQuery query="(max-width: 1400px) and (min-width:1100px)" styles={{width:'90vw !important', height:'90vh !important'}}>
                <MediaQuery query='(max-width:500px)' styles={{ width:'100vw !important', height:'100vh !important', borderRadius:'0px !important'}}>
                    <Group direction='column' style={{background:'rgba(255,255,255,0.2)', backdropFilter:'blur(10px)', padding:'20px', borderRadius:'25px'}}>
                            <Input_1 data={data} setData={setData} handleSubmit={handleSubmit}/>
                            <Display_1 check={check}/>
                    </Group>
                </MediaQuery>
            </MediaQuery>
            )
        }
}

export default Sub_1