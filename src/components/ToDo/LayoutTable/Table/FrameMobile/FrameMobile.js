import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import ItemFrame from './ItemFrameMobile/ItemFrame'
import { useStyles } from '../../styles/frameMobileStyles';

const FrameMobile = () => {
    const classes = useStyles()
    const { array } = useSelector(state => state.toDo)

    return (
        <Box sx={{ marginTop: '25px', }}>
            {array.length === 0 ?
                <Container className={classes.container}>
                    <Typography>
                        Sin datos
                    </Typography>
                </Container>
                : array.map((project) => (
                    <ItemFrame project={project} />
                ))}
        </Box>
    )
}
export default FrameMobile