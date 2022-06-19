import React from 'react'
import { AppBar, Box, Toolbar} from '@mui/material'

const Header = () => {
    return (
        <Box sx={{ background: '#ffffff' }}>
            <AppBar position="static" color='header'>
                <Toolbar>
                    <img src='./logo.png' alt="logo" />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header