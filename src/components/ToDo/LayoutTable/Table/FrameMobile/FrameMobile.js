import React from 'react'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import MenuOptions from '../MenuOptions/MenuOptions';
import { useStyles } from '../../styles/frameMobileStyles'
import { useSelector } from 'react-redux';

const FrameMobile = () => {

    const classes = useStyles()
    const { array } = useSelector(state => state.toDo)

    return (
        <Box sx={{ marginTop: '25px', }}>
            {array.map(({ id,projectName, date, assignedTo }) => (
                <Container className={classes.container}>
                    <Grid item container xs={12} >
                        <Grid item className={classes.itemColumn}>
                            <Typography variant='subtitle1'>
                                {projectName}
                            </Typography>
                            <Typography variant='subtitle2'>
                                Creation date: {date}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <MenuOptions id={id} />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} alignItems='center' sx={{ marginTop: '10px' }}>
                        <Avatar />
                        <Typography className={classes.typography}>
                            {assignedTo}
                        </Typography>
                    </Grid>
                </Container>
            ))}
        </Box>
    )
}

export default FrameMobile