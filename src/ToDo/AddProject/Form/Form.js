import React from 'react'
import { Box, Button, Container, Paper, TextField } from '@mui/material'
import Selects from '../Selects/Selects'

const Form = () => {
  return (
    <>
      <Paper elevation={3}>
        <Container sx={{ background: '#ffffff', padding: '20px', marginTop: '25px' }}>
          <Box component='form'>
            <TextField
              label='Project name'
              fullWidth
            />
            <TextField
              label='Description'
              fullWidth
              margin="normal"
            />
            <Selects />
            <Button variant='contained' size='small' color='secondary' sx={{ padding: '8px', marginTop: '10px' }}>
              Create project
            </Button>
          </Box>
        </Container>
      </Paper>
    </>
  )
}

export default Form