import React from 'react'
import { MenuItem, TextField } from '@mui/material'

const Selects = ({values,handleChange}) => {
    return (
        <>
            <TextField
                select
                label="Project manager"
                fullWidth
                margin="normal"
                name='projectManager'
                value={values.projectManager}
                onChange={handleChange}
                
            >
                <MenuItem value='Gabriel Barrientos'>
                    Gabriel Barrientos
                </MenuItem>
                <MenuItem value='Cosme fulanito'>
                    Cosme fulanito
                </MenuItem>
            </TextField>
            <TextField
                select
                label="Assigned to"
                fullWidth
                margin="normal"
                name='assignedTo'
                value={values.assignedTo}
                onChange={handleChange}
            >
                <MenuItem value='Pepito'>
                    Pepito
                </MenuItem>
                <MenuItem value='Pepita'>
                    Pepita
                </MenuItem>
            </TextField>
            <TextField
                select
                label="Status"
                fullWidth
                margin="normal"
                name='status'
                value={values.status}
                onChange={handleChange}
            >
                <MenuItem value='Enable'>
                    Enable
                </MenuItem>
                <MenuItem value='Disable'>
                    Disable
                </MenuItem>
            </TextField>
        </>

    )
}

export default Selects