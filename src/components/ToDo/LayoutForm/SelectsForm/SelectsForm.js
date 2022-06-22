import React from 'react'
import { MenuItem, TextField } from '@mui/material'
import { useStyles } from '../styles/formStyles'

const Selects = ({ handleChange, errors, values, touched }) => {

    const classes = useStyles()

    return (
        <>
            <TextField
                select
                className={classes.textField}
                label="Project manager"
                fullWidth
                margin="normal"
                name='projectManager'
                onChange={handleChange}
                value={values.projectManager}
                error={touched.projectManager && errors.projectManager}
                helperText={touched.projectManager && errors.projectManager}
            >
                <MenuItem value='Walt cosani'>
                    Walt Cosani
                </MenuItem>
            </TextField>
            <TextField
                select
                className={classes.textField}
                label="Assigned to"
                fullWidth
                margin="normal"
                name='assignedTo'
                onChange={handleChange}
                value={values.assignedTo}
                error={touched.assignedTo && errors.assignedTo}
                helperText={touched.assignedTo && errors.assignedTo}
            >
                <MenuItem value='Ignacio Truffa'>
                    Ignacio Truffa
                </MenuItem>
            </TextField>
            <TextField
                select
                className={classes.textField}
                label="Status"
                fullWidth
                margin="normal"
                name='status'
                onChange={handleChange}
                value={values.status}
                error={touched.status && errors.status}
                helperText={touched.status && errors.status}
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