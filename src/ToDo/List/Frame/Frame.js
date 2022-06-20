import {useMediaQuery } from '@mui/material'
import React from 'react'
import FrameDesktop from './FrameDesktop/FrameDesktop';

import FrameMobile from './FrameMobile/FrameMobile';

const Frame = () => {
    const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'));

    return (
        <>
            {hidden ? <FrameMobile/> : <FrameDesktop/>}
        </>
        
    )
}

export default Frame