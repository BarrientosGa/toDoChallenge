import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';

const SubHeaderAdd = () => {

    const { id } = useParams()

    return (
        <Box border='1px solid #D9D9D9'>
            <AppBar position="static" color='header'>
                <Toolbar>
                    <Link to='/'>
                        <Button variant="text" startIcon={<ArrowBackIcon sx={{ color: '#000' }} />}>
                            <Typography variant='subtitle1' color="initial">
                                Back
                            </Typography>
                        </Button>
                    </Link>
                    <Typography variant="h6" sx={{ marginLeft: '5px' }}>
                        {id === undefined ? 'Add projects' : 'Edit projects'}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default SubHeaderAdd