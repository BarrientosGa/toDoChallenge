import React from 'react'
import { MenuItem, TextField } from '@mui/material'

const Selects = () => {
    return (
        <>
            <TextField
                select
                label="Project manager"
                fullWidth
                margin="normal"
            >
                <MenuItem>
                    Gabriel Barrientos
                </MenuItem>
                <MenuItem>
                    Cosme fulanito
                </MenuItem>
            </TextField>
            <TextField
                select
                label="Assigned to"
                fullWidth
                margin="normal"
            >
                <MenuItem>
                    Pepito
                </MenuItem>
                <MenuItem>
                    Pepita
                </MenuItem>
            </TextField>
            <TextField
                select
                label="Status"
                fullWidth
                margin="normal"
            >
                <MenuItem>
                    Enable
                </MenuItem>
                <MenuItem>
                    Disable
                </MenuItem>
            </TextField>
        </>

    )
}

export default Selects