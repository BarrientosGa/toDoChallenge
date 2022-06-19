import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProject from './ToDo/AddProject/Index';
import List from './ToDo/List/Index';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path= '/' element={<List/>} />
      <Route exact path= '/add' element={<AddProject/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
