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
    <Group sx={{height:'100%', display:'flex',alignItems:'center', justifyContent:'center', background:'red'}}>
          <label>Your City :</label>
          <Input
            style={{border:'none'}}
            placeholder="Enter name of a City"
            radius="xl"
          />
    </Group>
  )
}

export default Input_1