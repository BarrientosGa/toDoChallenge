import React, { useId, useState } from 'react'
import { Box, Button, Container, Paper, TextField } from '@mui/material'
import Selects from '../Selects/Selects'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo, editToDo } from '../../../redux/Slice/toDoSlice'
import moment from 'moment';
import { useParams } from 'react-router-dom'


const Form = () => {
  const dispatch = useDispatch()
  const idForm = useId()
  const { id } = useParams()
  const { array } = useSelector(state => state.toDo)
  const project = array.find(element => element.id === id)


  const [values, setValues] = useState({
    id: id === undefined ? idForm : project.id,
    projectName: id === undefined ? '' : project.projectName,
    description: id === undefined ? '' : project.description,
    projectManager: id === undefined ? '' : project.projectManager,
    assignedTo: id === undefined ? '' : project.assignedTo,
    status: id === undefined ? '' : project.status,
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id === undefined) {
      dispatch(addToDo({ ...values, date: moment(new Date()).format('DD/MM/YYYY HH:mm a') }))
    }
    else {
      dispatch(editToDo({ ...values, date: moment(new Date()).format('DD/MM/YYYY HH:mm a') }))
    }
  }

  return (
    <>
      <Paper elevation={3}>
        <Container sx={{ background: '#ffffff', padding: '20px', marginTop: '25px' }}>
          <Box component='form' onSubmit={handleSubmit}>
            <TextField
              label='Project name'
              fullWidth
              name='projectName'
              value={values.projectName}
              onChange={handleChange}
            />
            <TextField
              label='Description'
              fullWidth
              margin="normal"
              name='description'
              value={values.description}
              onChange={handleChange}
            />
            <Selects values={values} handleChange={handleChange} />
            <Button variant='contained' size='small' color='secondary' sx={{ padding: '8px', marginTop: '10px' }} type='submit'>
              {id === undefined ? 'Create project' : 'Save changes'}
            </Button>
          </Box>
        </Container>
      </Paper>
    </>
  )
}

export default Form