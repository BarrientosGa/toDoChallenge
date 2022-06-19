import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useStyles } from './styles/listStyles'
import AddIcon from '@mui/icons-material/Add';

const List = () => {

  const classes = useStyles()

  return (
    <>
      <Box>
        <Typography variant="h5" color="initial">logo</Typography>
      </Box>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, border: '1px solid red' }}>
              MyProjects
            </Typography>
            <Button color="inherit" sx={{border: '1px solid yellow'}}>
              <AddIcon />
              Add project
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default List