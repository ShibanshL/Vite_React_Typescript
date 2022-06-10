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
            // <MediaQuery query='(max-width:500px)' styles={{ width:'100vw !important', height:'100vh !important', background:'cyan !important'}}>
            //     <Container size='xl' style={{ /*width:'100vw', height:'100vh',*/ borderRadius:'25px', backdropFilter:'blur(10px)' }}>
            //             <Input_1 data={data} setData={setData} handleSubmit={handleSubmit}/>
            //             <Display_Sub_1 />
            //     </Container>
            // </MediaQuery>
            <>hi</>

          )
    } 
    else{
        return (
            <>
                <Grid>
                    <Grid.Col span={4}>
                        <Input_1 data={data} setData={setData} handleSubmit={handleSubmit}/>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Display_1 check={check}/>
                    </Grid.Col>
                </Grid>
            </>
            )
        }
}

export default Sub_1