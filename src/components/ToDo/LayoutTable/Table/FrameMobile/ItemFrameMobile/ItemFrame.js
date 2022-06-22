import React from 'react'
import { Avatar,Container, Grid, Typography } from '@mui/material'
import MenuOptions from '../../MenuOptions/MenuOptions';
import { useStyles } from '../../../styles/frameMobileStyles'

const ItemFrame = ({ project }) => {
    let { projectName, date, assignedTo, id } = project
    const classes = useStyles()

    return (
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
    )
}

export default ItemFrame