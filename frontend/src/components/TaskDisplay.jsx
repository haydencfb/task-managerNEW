import * as React from 'react';
import Grid from '@mui/material/Grid2';
import TaskCard from './TaskCard';

const TaskDisplay = () => {

    return (

        <>
            <Grid container
                spacing={2}
                direction="row"
            >
                <Grid size={12}>
                    <TaskCard />
                </Grid>
            </Grid>
        </>

    )

}

export default TaskDisplay;