import React from 'react'
import { useStyles } from './styles/addStyles'
import Header from '../List/Header/Header'
import SubHeaderAdd from './SubHeaderAdd/SubHeaderAdd'
import Form from './Form/Form'

const AddProject = () => {

  const classes = useStyles()

  return (
    <>
      <Header />
      <SubHeaderAdd />
      <Form/>
    </>
  )
}

export default AddProject