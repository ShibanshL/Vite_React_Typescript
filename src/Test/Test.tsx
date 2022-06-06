import React from 'react'
import './Test.css'
import { Grid } from '@mantine/core';
import { Input } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
// import { At } from 'tabler-icons-react';
function Test() {
    const theme = useMantineTheme();

    const secondaryColor = theme.colorScheme === 'dark'
      ? theme.colors.dark[1]
      : theme.colors.gray[7];
  
    return (
        <Grid>
            <Grid.Col span={6}>
                <div className='Test' style={{ width: 340, margin: 'auto', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', background:'lightblue' }}>
                    <Card shadow="sm" p="lg">
                    <Card.Section>
                        <Image src="https://ipt.imgix.net/202004/x/0/lofoten-216.jpg" style={{marginLeft:'3vw'}} height={180} alt="Norway" />
                    </Card.Section>
            
                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm, padding:'0px 25px' }}>
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Badge color="pink" variant="light">
                        On Sale
                        </Badge>
                    </Group>
            
                    <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5, padding:'0px 25px', marginTop:'2vh' }}>
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                        activities on and around the fjords of Norway
                    </Text>
            
                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                        Book classic tour now
                    </Button>
                    </Card>
                </div>
            </Grid.Col>
            <Grid.Col span={6}>
                    <div className='Test' style={{ width: 340, margin: 'auto', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', background:'lightblue' }}>
                        <Card shadow="sm" p="lg">
                        <Card.Section>
                            <Image src="https://ipt.imgix.net/202004/x/0/lofoten-216.jpg" style={{marginLeft:'3vw'}} height={180} alt="Norway" />
                        </Card.Section>
                
                        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm, padding:'0px 25px' }}>
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink" variant="light">
                            On Sale
                            </Badge>
                        </Group>
                
                        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5, padding:'0px 25px', marginTop:'2vh' }}>
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>
                
                        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                            Book classic tour now
                        </Button>
                        </Card>
                    </div>
            </Grid.Col>
      
      

      {/* <Grid.Col span={4}>3</Grid.Col> */}
    </Grid>
    );
}

export default Test