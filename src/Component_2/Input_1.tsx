import React from 'react'
import './Sub_1.css'
import { Input } from '@mantine/core';

interface props  {
    data:string
    setData:React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent) => void
}
function Input_1({data, setData, handleSubmit}:props) {
console.log(data)

  return (
    <div className="Input_1">
        <form onSubmit={e => handleSubmit(e)}>
            <label>Your City :</label>
            <div className="Input">
            <Input
                placeholder="Your email"
                radius="xl"
                value={data}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>{setData(e.target.value)}}
            />
            </div>
        </form>

    </div>
  )
}

export default Input_1