import React from 'react'
import './Test.css'
import { Center } from '@mantine/core';
import { Input } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
// import { At } from 'tabler-icons-react';
function Test() {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
      ? theme.colors.dark[1]
      : theme.colors.gray[7];
  
    return (
            <Center style={{ width:'90vw', height:'90vh', borderRadius:'25px', backdropFilter:'blur(10px)' }}>
              <div>All elements inside Center are centered</div>
            </Center>
    );       
}

export default Test