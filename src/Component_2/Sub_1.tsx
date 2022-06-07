import React,{useState} from 'react'
import { Center,Container,Grid, Group } from '@mantine/core';
// import './Sub_1.css'
import Input_1 from './Input_1';
import Display_Sub_1 from './Display_Sub_1';
import Display from '../Component/Display';
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
            <Center style={{ width:'90vw', height:'90vh', borderRadius:'25px', backdropFilter:'blur(10px)' }}>

            <div className="Main">
              <div className="Main_sub">
                  <div className="Input">
                      {/* <Input data={data} setData={setData} handleSubmit={handleSubmit}/> */}
                      <Input_1 data={data} setData={setData} handleSubmit={handleSubmit}/>
                  </div>
                  <div className="Display">
                      {/* <Display_Sub /> */}
                      <Display_Sub_1 />
                  </div>
              </div>
            </div>
            </Center>

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
    <Group direction='column' style={{height:'90vh', width:'90vw', background:'pink', padding:30, borderRadius:'25px'}}>
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