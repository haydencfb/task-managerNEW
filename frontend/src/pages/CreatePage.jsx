import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTaskManager } from '../globalState/task';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router';

const CreatePage = () => {
    const [newTask, setNewTask] = useState({
        name: "",
        description: "",
        status: "",
    });

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    // Destructure createTask from the Zustand store
    const { createTask } = useTaskManager();

    const handleAddTask = async () => {
        const { success, message } = await createTask(newTask);
        console.log('Success: ', success);
        console.log('Message: ', message);
        if (success === true) {
            setOpen1(true);

        } else {
            setOpen2(true);
        }
        setNewTask({ name: '', description: '', status: '' });
    };

    return (

        <>
            <Grid container 
                spacing={2} 
                sx={{ 
                    backgroundColor: '#101010',
                    height: '80vh',
                    alignItems: 'center',
                    borderRadius: '15px'
                }}>
                <Grid size={12}>
                    <Typography
                        variant='h3'
                        sx={{
                            textAlign: 'center',
                            color: 'white',
                        }}
                    >
                        Create New Task
                    </Typography>
                </Grid>

                <Grid size={12}>
                    <TextField
                        placeholder='Task Name'
                        value={newTask.name}
                        id='filled-basic'
                        label='Task Name' 
                        variant='filled'
                        onChange={(e) =>
                            setNewTask({ ...newTask, name: e.target.value })
                        }
                        sx={{
                            width: '85%',
                            margin: '5px',
                            backgroundColor: 'white',
                            borderRadius: '5px'
                        }}
                    />
                    <TextField
                        placeholder='Task Description'
                        value={newTask.description}
                        id='filled-basic'
                        label='Description' 
                        variant='filled'
                        onChange={(e) =>
                            setNewTask({ ...newTask, description: e.target.value })
                        }
                        sx={{
                            width: '85%',
                            margin: '5px',
                        }}
                    />
                    <TextField
                        placeholder='Task Status'
                        value={newTask.status}
                        id='filled-basic'
                        label='Status' 
                        variant='filled'
                        onChange={(e) =>
                            setNewTask({ ...newTask, status: e.target.value })
                        }
                        sx={{
                            width: '85%',
                            margin: '5px',
                        }}
                    />
                </Grid>
                
                <Grid size={12}>
                    <Button onClick={handleAddTask}>Create New Task</Button>
                </Grid>
            </Grid>

            {open1 && (
                <>
                    <Alert 
                        variant='filled'
                        severity="success" 
                        action={
                            <Link to={'/'}
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                    display: 'inline',
                                }}
                            >
                                Go Back
                            </Link>
                        }
                        sx={{
                            marginTop: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            // paddingTop: '0px'
                        }}
                        onClose={() => setOpen1(false)}
                    >
                        Task Created!
                    </Alert>

                </>
            )}
            {open2 && (
                <Alert 
                    variant='filled'
                    severity="error" 
                    sx={{
                        marginTop: '10px'
                    }}
                    onClose={() => setOpen2(false)}>
                    There was an error!
                </Alert>
            )}

        </>

    );
};

export default CreatePage;