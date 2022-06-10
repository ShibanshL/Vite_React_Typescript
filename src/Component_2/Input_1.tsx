import React from 'react'
// import './Sub_1.css'
import { Input, Group, MediaQuery, Text } from '@mantine/core';

interface props  {
    data:string
    setData:React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent) => void
}
function Input_1({data, setData, handleSubmit}:props) {
console.log(data)

  return (
    <>
      <Group style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
        <form onSubmit={e => handleSubmit(e)}>
        <Input
          placeholder="Enter the name of the City"
          radius="xl"
          value={data}
          variant="filled"
          size='md'
          onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>setData(e.target.value)}
        />
        </form>
      </Group>
    </>
  )
}

export default Input_1