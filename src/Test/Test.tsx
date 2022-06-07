import React from 'react'
import './Test.css'
import { Center } from '@mantine/core';
import { Input } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Footer, Transition } from '@mantine/core';
// import { At } from 'tabler-icons-react';
function Test() {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
      ? theme.colors.dark[1]
      : theme.colors.gray[7];
  
    return (
            <Center style={{ width:'90vw', height:'90vh', borderRadius:'25px', backdropFilter:'blur(10px)', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>

               <div>Hi i'm working!</div>
               <Footer height={60} p='md' style={{background:'pink', width:'90vw', alignItems:'baseline'}}>{}</Footer>
            </Center>
    );       
}

export default Test