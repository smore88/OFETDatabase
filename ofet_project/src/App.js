import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DataOriginForm from './components/ExperimentalDataOriginScreen/DataOriginForm';
import Login from './components/LoginRegisterScreen/Login';
import SolutionMakeUpScreen from './components/SolutionMakeup/SolutionMakeupScreen';

import './App.css';


function App() {
  return (
    <div>
        <Routes>
          {/* <Route path="/" element={<Login></Login>}></Route>
          <Route path="/data-origin" element={<DataOriginForm></DataOriginForm>}></Route>
          <Route path="/sol-makeup" element={<SolMakeup></SolMakeup>}></Route> */}
        </Routes>
        <SolutionMakeUpScreen></SolutionMakeUpScreen>
    </div>
  );
};
export default App;
