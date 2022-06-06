import React,{useState} from 'react'
import { Center } from '@mantine/core';
import './Sub_1.css'
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
        return (
            <Center style={{ width:'90vw', height:'90vh', borderRadius:'25px', backdropFilter:'blur(10px)' }}>
                <div className="Main">
                <div className="Main_sub">
                    <div className="Input">
                        {/* <Input data={data} setData={setData} handleSubmit={handleSubmit}/> */}
                      <Input_1 data={data} setData={setData} handleSubmit={handleSubmit}/>
                    </div>
                    <div className="Display">
                        {/* <Display check={check}/> */}
                        <Display_1 check={check} />
                    </div>
                </div>
                </div>
                <div className="Pseudo_ele"></div>
            </Center>

          )
    
    }
}

export default Sub_1