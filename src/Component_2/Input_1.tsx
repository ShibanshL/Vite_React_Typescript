import React from 'react'
// import './Sub_1.css'
import { Input, Group, MediaQuery } from '@mantine/core';

interface props  {
    data:string
    setData:React.Dispatch<React.SetStateAction<string>>
    handleSubmit: (e: React.FormEvent) => void
}
function Input_1({data, setData, handleSubmit}:props) {
console.log(data)

  return (
    <></>
  )
}

export default Input_1