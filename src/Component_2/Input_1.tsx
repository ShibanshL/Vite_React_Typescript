import React from 'react'
// import './Sub_1.css'
import { Input, Group } from '@mantine/core';

interface props  {
    data:string
    setData:React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent) => void
}
function Input_1({data, setData, handleSubmit}:props) {
console.log(data)

  return (
    <Group sx={{ display:'flex',alignItems:'center', justifyContent:'baseline', background:'red', width:'100%'}}>
    <form onSubmit={e => handleSubmit(e)} style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
          <label>Your City :</label>
          <Input
            style={{border:'none', width:'25vw'}}
            placeholder="Enter name of a City"
            radius="xl"
            value={data}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>{setData(e.target.value)}}
          />
      </form>
    </Group>
  )
}

export default Input_1