import React from 'react'
// import './Test.css'
import { Center,MediaQuery } from '@mantine/core';
import { Input } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Footer, Transition } from '@mantine/core';
// import { At } from 'tabler-icons-react';
function Test() {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
      ? theme.colors.dark[1]
      : theme.colors.gray[7];
  
    return (
      <MediaQuery  query="(max-width: 1100px) and (min-width: 800px)" styles={{background:'cyan'}}>
        <MediaQuery  query="(max-width: 800px) and (min-width: 200px)" styles={{background:'pink'}}>
            <Center style={{ width:'100vw', height:'100vh', borderRadius:'25px', backdropFilter:'blur(10px)', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
                  <div>Hi i'm working!</div>
                  <Footer height={60} p='md' style={{background:'pink', width:'90vw', alignItems:'baseline'}}>Hi i'm footer</Footer>
            </Center>
          </MediaQuery>
      </MediaQuery>
    );       
}

export default Test