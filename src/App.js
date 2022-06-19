import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProject from './ToDo/AddProject/Index';
import List from './ToDo/List/Index';
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<List />} />
          <Route exact path='/add' element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
