import React, { useState } from 'react'
import Header from './Header/Header';
import SubHeader from './SubHeader/SubHeader';
import Frame from './Frame/Frame';

const List = () => {

  const [editing, setEditing] = useState(false)

  return (
    <>
      <Header />
      <SubHeader editing={editing} />
      <Frame setEditing={setEditing} />
    </>
  )
}

export default List