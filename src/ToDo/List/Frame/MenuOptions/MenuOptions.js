import React from 'react'
import { Box, Button, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ITEM_HEIGHT = 48;



const MenuOptions = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon sx={{color:'#000'}} />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem selected={'Edit' === 'Pyxis'} onClick={handleClose}>
                    <EditIcon />
                    <Typography variant="body1" color="initial" sx={{marginLeft:'10px'}}>
                        Edit
                    </Typography>

                </MenuItem>
                <Divider />
                <MenuItem selected={'Delete' === 'Pyxis'} onClick={handleClose}>
                    <DeleteIcon />
                    <Typography variant="body1" color="initial" sx={{marginLeft:'10px'}}>
                        Delete
                    </Typography>
                </MenuItem>

            </Menu>
        </Box>
    )
}
export default MenuOptions