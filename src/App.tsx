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
              background:'url(https://th.bing.com/th/id/OIP.gBeCVKgLwETPV85lDUCNJAHaFj?pid=ImgDet&rs=1)',backgroundSize:'cover' , overflow:'hidden',fontFamily: 'Poppins' },
      })}
    >
      <Container size="xl" px="xl" style={{background:'rgba(255,255,255,0.2)', borderRadius:'15px', padding:'20px'}}><Sub_1 /></Container>
      {/* <Container  style={{background:'pink'}} size='xs'>Hi have good day</Container> */}

    </AppShell>
  );
}

export default App;
