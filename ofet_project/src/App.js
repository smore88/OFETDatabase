import React from 'react';
import { Route, Routes } from 'react-router-dom';

// All the pages that we can visit here
import DataOriginForm from './components/ExperimentalDataOriginScreen/DataOriginForm';
import Login from './components/LoginRegisterScreen/Login';
import SolutionMakeUpScreen from './components/SolutionMakeup/SolutionMakeupScreen';
import SolutionTreatment from './components/SolutionTreatment/SolutionTreatment';
import DeviceFabrication from './components/DeviceFabrication/DeviceFabricationScreen';
import SubstratePretreat from './components/SubstratePretreat/SubstratePretreat';
import CoatingProcess from './components/CoatingProcess/CoatingProcessScreen';
import PostProcessing from './components/PostProcessing/PostProcessing';


import './App.css';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/data-origin" element={<DataOriginForm></DataOriginForm>}></Route>
          <Route path="/sol-makeup" element={<SolutionMakeUpScreen></SolutionMakeUpScreen>}></Route>
          <Route path="/sol-treatment" element={<SolutionTreatment></SolutionTreatment>}></Route>
          <Route path="/dev-fabrication" element={<DeviceFabrication></DeviceFabrication>}></Route>
          <Route path="/sub-pretreat" element={<SubstratePretreat></SubstratePretreat>}></Route>
          <Route path="/coat-process" element={<CoatingProcess></CoatingProcess>}></Route>
          <Route path="/post-processing" element={<PostProcessing></PostProcessing>}></Route>
        </Routes>
    </div>
  );
};
export default App;
