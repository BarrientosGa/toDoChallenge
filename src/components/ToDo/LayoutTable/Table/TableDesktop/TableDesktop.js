import React from 'react'
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useSelector } from 'react-redux'
import RowComponent from './RowComponent'

const TableDesktop = ({setEditing}) => {
  const { array } = useSelector(state => state.toDo)

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
            {array.length === 0 ?
              <TableRow>
                <TableCell align='center' colSpan='5'>
                  Sin datos
                </TableCell>
              </TableRow>
              : array.map((project, index) => (
                <RowComponent key={index} project={project} setEditing={setEditing} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default TableDesktop