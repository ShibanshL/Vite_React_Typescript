import React from 'react'
import './Test.css'
import { Center } from '@mantine/core';
import { Input } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Transition } from '@mantine/core';
// import { At } from 'tabler-icons-react';
function Test({opened}) {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
      ? theme.colors.dark[1]
      : theme.colors.gray[7];
  
    return (
            <Center style={{ width:'90vw', height:'90vh', borderRadius:'25px', backdropFilter:'blur(10px)' }}>
               <Transition mounted={opened} transition="fade" duration={400} timingFunction="ease">
                  {(styles) => <div style={styles}>Your modal</div>}
                </Transition>
            </Center>
    );       
}

export default Test