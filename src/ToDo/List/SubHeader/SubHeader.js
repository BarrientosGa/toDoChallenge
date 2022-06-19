import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const SubHeader = () => {
    return (
        <Box border='1px solid #D9D9D9'>
            <AppBar position="static" color='header'>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, border: '1px solid red' }}>
                        My Projects
                    </Typography>
                    <Button color="inherit" sx={{ border: '1px solid yellow' }}>
                        <AddIcon />
                        Add project
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default SubHeader