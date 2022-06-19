import React from 'react'
import { useStyles } from './styles/listStyles'
import Header from './Header/Header';
import SubHeader from './SubHeader/SubHeader';

const List = () => {

  const classes = useStyles()

  return (
    <>
      <Header />
      <SubHeader />
    </>
  )
}

export default List