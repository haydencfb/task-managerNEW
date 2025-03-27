import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const SidebarNavigation = () => {

    return (

        <>
            <Grid container 
                spacing={2} 
                direction="column" 
                sx={{ 
                    backgroundColor: "#101010", 
                    width: "200px",
                    height: "90vh",
                    borderRadius: "15px",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Grid size={ 12 }>
                    <h1>Logo</h1>
                </Grid>
                <Grid size={ 12 }
                    sx={{
                        padding: "5px",
                        alignItems: 'center'
                    }}
                >

                    <Link to={'/create'}
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <Typography 
                            variant='button' 
                            gutterBottom
                            sx={{  
                                width: '100%',
                                height: '30px',
                                margin: "2.5px", 
                                backgroundColor: "red",
                                color: 'white', 
                                borderRadius: "7px",
                                display: 'block',
                            }}
                        >
                            Create Task
                        </Typography>
                    </Link>

                    <Button variant='contained' sx={{ width: "90%", margin: "2.5px", backgroundColor: "red",borderRadius: "7px" }}>Completed Tasks</Button>

                    <Button variant='contained' sx={{ width: "90%", margin: "2.5px", backgroundColor: "red",borderRadius: "7px" }}>Current Tasks</Button>

                </Grid>
            </Grid>
        </>

    )

}

export default SidebarNavigation;