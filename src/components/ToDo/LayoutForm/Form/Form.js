import React, { useId } from 'react'
import { Box, Button, Container, Paper, TextField } from '@mui/material'
import SelectsForm from '../SelectsForm/SelectsForm'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo, editToDo } from '../../../../redux/Slice/toDoSlice'
import moment from 'moment';
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { validationSchema } from './Validation/validation'
import { useStyles } from '../styles/formStyles'

const Form = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const idForm = useId()
  const { id } = useParams()
  const { array } = useSelector(state => state.toDo)
  const project = array.find(element => element.id === id)

  const { handleSubmit, errors, handleChange, values, touched, handleBlur } = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: id === undefined ? idForm : project.id,
      projectName: id === undefined ? '' : project.projectName,
      description: id === undefined ? '' : project.description,
      projectManager: id === undefined ? '' : project.projectManager,
      assignedTo: id === undefined ? '' : project.assignedTo,
      status: id === undefined ? '' : project.status,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (id === undefined) {
        dispatch(addToDo({ ...values, date: moment(new Date()).format('DD/MM/YYYY HH:mm a') }))
      }
      else {
        dispatch(editToDo({ ...values, date: moment(new Date()).format('DD/MM/YYYY HH:mm a') }))
      }
    }
  })

  return (
    <>
      <Paper elevation={3} variant="outlined" className={classes.paper}>
        <Container sx={{ background: '#ffffff', padding: '20px', marginTop: '25px'}}>
          <Box component='form' onSubmit={handleSubmit}>
            <TextField
              className={classes.textField}
              label='Project name'
              fullWidth
              name='projectName'
              onChange={handleChange}
              value={values.projectName}
              error={touched.projectName && errors.projectName}
              helperText={touched.projectName && errors.projectName}
            />
            <TextField
              className={classes.textField}
              label='Description'
              fullWidth
              margin="normal"
              name='description'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              error={touched.description && errors.description}
              helperText={touched.description && errors.description}
            />
            <SelectsForm handleChange={handleChange} errors={errors} values={values} touched={touched} />
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