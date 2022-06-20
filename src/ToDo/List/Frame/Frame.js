import { Avatar, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import MenuOptions from './MenuOptions/MenuOptions';

const Frame = () => {
    return (
        <Container sx={{marginTop: '25px', background:'#ffffff', paddingTop: '10px', paddingBottom:'10px'}} >
            <Grid item container xs={12} >

                <Grid item sx={{display:'flex', flexDirection:'column', flexGrow:1}}>
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
            <Grid item container xs={12} alignItems='center' sx={{marginTop:'10px'}}>
                <Avatar />
                <Typography sx={{fontSize:'0.813em', marginLeft:'8px'}}>
                    Ignacio Truffa
                </Typography>
            </Grid>


        </Container>
    )
}

export default Frame