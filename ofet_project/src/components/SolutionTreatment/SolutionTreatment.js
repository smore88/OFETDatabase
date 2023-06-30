import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NextPageButton } from './SolutionTreatmentStyleComponents';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import PoorSolvent from './PoorSolvent/PoorSolvent';
import NavBar from '../GenericUI/NavBar';
import Box from './SelectTreatmentBox/Box';

const SolutionTreatment = (props) => {

    const navigateTo = useNavigate();
    const handleNext = () => {
        // Perform logic
        // ...
        // Navigate to the solution treatment page
        navigateTo('/sol-treatment');
    };

    return (
        <div>
            <NavBar title="Solution Treatment"></NavBar>
            <Box></Box>
        </div>
    );
};

export default SolutionTreatment;