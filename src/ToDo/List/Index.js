import React from 'react'
import { useStyles } from './styles/listStyles'
import Header from './Header/Header';
import SubHeader from './SubHeader/SubHeader';
import Frame from './Frame/Frame';

const List = () => {

  const classes = useStyles()

  return (
    <>
      <Header />
      <SubHeader />
      <Frame />
    </>
  )
}

export default List