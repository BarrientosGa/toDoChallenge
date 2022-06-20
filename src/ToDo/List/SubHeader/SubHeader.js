import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const SubHeader = () => {
    return (
        <Box border='1px solid #D9D9D9'>
            <AppBar position="static" color='header'>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        My Projects
                    </Typography>
                    <Link to='/add'>
                        <Button variant='contained' size='small' color='secondary' sx={{ padding: '10px' }} startIcon={<AddIcon sx={{fontSize:'23px !important'}} />}>
                            Add project
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default SubHeader