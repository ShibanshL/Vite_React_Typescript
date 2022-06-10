import React from 'react';
// import './App.css';
import Sub_1 from './Component_2/Sub_1';
import Test from './Test/Test';
import {  AppShell, Container} from '@mantine/core';


function App() {

  return (
    <AppShell

      styles={(theme) => ({
        main: { height:'100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center', padding:0, margin:0, boxSizing:'border-box',
              background:'url(https://ipt.imgix.net/202004/x/0/lofoten-216.jpg)', overflow:'hidden' },
      })}
    >
      <Container size='xl' style={{ display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}><Sub_1 /></Container>
    </AppShell>
  );
}

export default App;
