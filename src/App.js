import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutForm from './components/ToDo/LayoutForm/Index';
import List from './components/ToDo/LayoutTable/Index';
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<List />} />
          <Route exact path='/add' element={<LayoutForm />} />
          <Route exact path='/edit/:id' element={<LayoutForm />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
