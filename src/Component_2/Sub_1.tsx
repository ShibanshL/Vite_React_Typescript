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
            <MediaQuery query='(max-width: 500px)' styles={{ width:'100vw !important', height:'100vh !important'}}>
                <Container size='xl' style={{ width:'100vw', height:'100vh', borderRadius:'25px', backdropFilter:'blur(10px)' }}>
              
                        {/* <Input data={data} setData={setData} handleSubmit={handleSubmit}/> */}
                        <Input_1 data={data} setData={setData} handleSubmit={handleSubmit}/>
                   
                        {/* <Display_Sub /> */}
                        <Display_Sub_1 />
               
                </Container>
            </MediaQuery>

          )
    } 
    else{
//         return (
//             <Container sx={{background:'pink', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
//                    <Grid>
//                        <Grid.Col sx={{height:'20%',background:'cyan'}}span={12}>
//                             <Input_1 data={data} setData={setData} handleSubmit={handleSubmit}/>
//                        </Grid.Col>
//                        <Grid.Col sx={{height:'80%',background:'yellow'}} span={12}>
//                             <Display_1 check={check}/>
//                        </Grid.Col>
//                    </Grid>
//             </Container> 

//   )
return (
    <Group direction='column' style={{/*height:'90vh', width:'90vw',*/ background:'rgba(255,255,255,0.2)', backdropFilter:'blur(10px)', padding:'20px', borderRadius:'25px'}}>
        {/* <Group> */}
            <Input_1 data={data} setData={setData} handleSubmit={handleSubmit}/>
        {/* </Group> */}
        {/* <Group> */}
            <Display_1 check={check}/>
        {/* </Group> */}
    </Group>

)
    }
}

export default Sub_1