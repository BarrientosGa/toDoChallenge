import React from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux';
import ItemFrame from './ItemFrameMobile/ItemFrame'

const FrameMobile = () => {
    const { array } = useSelector(state => state.toDo)

    return (
        <Box sx={{ marginTop: '25px', }}>
            {array.map((project) => (
                <ItemFrame project={project} />
            ))}
        </Box>
    )
}
export default FrameMobile