import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton2, ButtonContainer2, SolutionTreatmentBox, HeaderBox } from '../CoatingProcessStyleComponents';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import AddSolventCard from '../S-Card/addSpinCard';
import Typography from '@mui/material/Typography';


const CoatBox = (props) => {

    return (
        <SolutionTreatmentBox>
            <HeaderBox>
                <Typography variant="h6" fontWeight="bold">Select Segment</Typography>
            </HeaderBox>
            <ButtonContainer2>
                <CustomButton2 onClick={props.handleBlade}>Spin Coating</CustomButton2>
                <CustomButton2 onClick={props.handleSpin}>Blade Coating</CustomButton2>
                <CustomButton2 onClick={props.handleDrop}>Drop Casted</CustomButton2>
                <CustomButton2 onClick={props.handleOther}>Other Coating Method</CustomButton2>
            </ButtonContainer2>
        </SolutionTreatmentBox>
    );
};

export default CoatBox;