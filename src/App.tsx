import React from 'react';
// import './App.css';
import Display from './Component/Display';
import Sub from './Component/Sub';
import Sub_1 from './Component_2/Sub_1';
import Test from './Test/Test';
import {  AppShell, Container} from '@mantine/core';


function App() {

  return (
    <AppShell
      // padding="md"
      // navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      // header={<Header height={60} p="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { /*backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],*/
                height:'100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center', padding:0, margin:0, boxSizing:'border-box',
              background:'url(https://ipt.imgix.net/202004/x/0/lofoten-216.jpg)' },
      })}
    >
      {/* <div className="Search"><Sub_1 /></div> */}
      <Container style={{ display:'flex', alignItems:'center', justifyContent:'center'}}><Sub_1 /></Container>
      {/* <Container style={{ width:'90vw', minWidth:'90vw', height:'90vh', background:'cyan'}}><Sub_1 /></Container> */}

      
      {/* Your application here */}
    </AppShell>
  );
  // return (
  //   <div className="App">
  //     {/* <div className="Search"><Sub /></div> */}
  //     {/* <div className="Search"><Test /></div> */}
  //     {/* <div className="Search"><Sub_1 /></div> */}


     
  //   </div>
  // );
}

export default App;
