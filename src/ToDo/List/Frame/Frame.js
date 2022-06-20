import { Avatar, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import MenuOptions from './MenuOptions/MenuOptions';
import { useStyles } from '../styles/frameStyles'

const Frame = () => {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Grid item container xs={12} >
                <Grid item className={classes.itemColumn}>
                    <Typography variant='subtitle1'>
                        Landing page
                    </Typography>
                    <Typography variant='subtitle2'>
                        Creation date: 09/09/2020 10:30 am
                    </Typography>
                </Grid>
                <Grid item>
                    <MenuOptions />
                </Grid>
            </Grid>
            <Grid item container xs={12} alignItems='center' sx={{ marginTop: '10px' }}>
                <Avatar />
                <Typography className={classes.typography}>
                    Ignacio Truffa
                </Typography>
            </Grid>
        </Container>
    )
}

export default Frame