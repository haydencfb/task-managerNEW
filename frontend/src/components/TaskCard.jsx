import * as React from 'react';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';

const TaskCard = () => {

    return (

        <>
            <Grid container
                spacing={2}
                direction="row"
                sx={{
                    padding: "5px",
                    justifyContent: "space-between",
                }}
            >
                <Grid size={3}
                    sx={{
                        backgroundColor: "green",
                        borderRadius: "15px"
                    }}
                >
                    Task
                </Grid>
            </Grid>
        </>

    )

}

export default TaskCard;