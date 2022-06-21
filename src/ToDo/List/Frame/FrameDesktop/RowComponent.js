import React from 'react'
import { Avatar, Box, Paper, TableCell,TableRow, Typography } from '@mui/material'
import { useStyles } from '../../styles/frameDesktopStyle'
import MenuOptions from '../MenuOptions/MenuOptions'

const RowComponent = ({ project, setEditing }) => {
    const classes = useStyles()
    let { id, projectName, date, projectManager, assignedTo, status } = project
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                <Box component='div' className={classes.boxFirst}>
                    <Typography variant="subtitle1" color="initial">
                        {projectName}
                    </Typography>
                    <Typography variant="subtitle2" >
                        Creation date: {date}
                    </Typography>
                </Box>
            </TableCell>
            <TableCell>
                <Box component='div' className={classes.boxShared}>
                    <Avatar className={classes.avatar}>WC</Avatar>
                    <Typography variant='subtitle1' sx={{ marginLeft: '10px' }}>
                        {projectManager}
                    </Typography>
                </Box>
            </TableCell>
            <TableCell align='center'>
                <Box component='div' className={classes.boxShared}>
                    <Avatar className={classes.avatar} />
                    <Typography variant='subtitle1' sx={{ marginLeft: '10px' }}>
                        {assignedTo}
                    </Typography>
                </Box>
            </TableCell>
            <TableCell align='center'>
                <Paper sx={{ background: '#D9D9D9' }}>
                    {status}
                </Paper>
            </TableCell>
            <TableCell align='center'>
                <MenuOptions id={id} setEditing={setEditing} />
            </TableCell>
        </TableRow>
    )
}

export default RowComponent