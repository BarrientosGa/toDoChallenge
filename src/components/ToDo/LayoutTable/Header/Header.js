import React from 'react'
import { AppBar, Box, Toolbar} from '@mui/material'
import logo from '../../../../assets/logo.png'

const Header = () => {
    return (
        <Box sx={{ background: '#ffffff' }}>
            <AppBar position="static" color='header'>
                <Toolbar>
                    <img src={logo} alt="logo" />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header