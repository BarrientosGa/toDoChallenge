import {useMediaQuery } from '@mui/material'
import React from 'react'
import TableDesktop from './TableDesktop/TableDesktop';

import FrameMobile from './FrameMobile/FrameMobile';

const Table = () => {
    const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'));

    return (
        <>
            {hidden ? <FrameMobile/> : <TableDesktop />}
        </>
        
    )
}

export default Table