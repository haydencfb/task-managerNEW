import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import SidebarNavigation from '../components/SidebarNavigation';
import TaskDisplay from '../components/TaskDisplay';

const HomePage = () => {

    return (
        <>
            <Grid container
                spacing={ 2 }
                direction="row"
            >
                <Grid size={ 2 }>
                    <SidebarNavigation />
                </Grid>
                <Grid size={ 10 }
                    sx={{
                        backgroundColor: "#101010",
                        borderRadius: "15px"
                    }}
                >
                    <TaskDisplay />
                </Grid>
            </Grid>
        </>    
    )
};

export default HomePage;