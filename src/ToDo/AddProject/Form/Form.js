import React, {useId, useState } from 'react'
import { Box, Button, Container, Paper, TextField } from '@mui/material'
import Selects from '../Selects/Selects'
import { useDispatch } from 'react-redux'
import { addToDo } from '../../../redux/Slice/toDoSlice'
/* import { useParams } from 'react-router' */

const Form = () => {
  /* const {id} = useParams()
  console.log(typeof id);
  const {array} = useSelector(state => state.toDo) */
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    id : useId(),
    project : '',
    description: '' ,
    projectManager : '',
    assignedTo : '',
    status : ''
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addToDo(values))
  }

 /*  useEffect(() => {
    const test = array.find(element => {
      return element.id == id ? setValues(element) : null
    })
    console.log(test);
    
  },[id,array]) */

  return (
    <>
      <Paper elevation={3}>
        <Container sx={{ background: '#ffffff', padding: '20px', marginTop: '25px' }}>
          <Box component='form' onSubmit={handleSubmit}>
            <TextField
              label='Project name'
              fullWidth
              name='project'
              value={values.project}
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
              Create project
            </Button>
          </Box>
        </Container>
      </Paper>
    </>
  )
}

export default Form