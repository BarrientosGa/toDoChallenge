import React from 'react'
import { Avatar, Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import MenuOptions from '../MenuOptions/MenuOptions'
import { useStyles } from '../../styles/frameDesktopStyle'

const FrameDesktop = () => {

  const classes = useStyles()

  return (
    <Container sx={{ marginTop: '25px' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Project info</TableCell>
              <TableCell align="center">Project manager</TableCell>
              <TableCell align="center">Assigned to</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Box component='div' className={classes.boxFirst}>
                  <Typography variant="subtitle1" color="initial">
                    Landing page
                  </Typography>
                  <Typography variant="subtitle2" >
                    Creation date: 09/09/2020 10:30 am
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box component='div' className={classes.boxShared}>
                  <Avatar sx={{ background: 'red' }} className={classes.avatar}>WC</Avatar>
                  <Typography variant='subtitle1' sx={{ marginLeft: '10px' }}>
                    Walt cosani
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align='center'>
                <Box component='div' className={classes.boxShared}>
                  <Avatar className={classes.avatar} />
                  <Typography variant='subtitle1' sx={{ marginLeft: '10px' }}>
                    Ignacio Truffa
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align='center'>
                <Paper sx={{ background: '#D9D9D9'}}>
                  Enabled
                </Paper>
              </TableCell>
              <TableCell align='center'>
                <MenuOptions />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default FrameDesktop