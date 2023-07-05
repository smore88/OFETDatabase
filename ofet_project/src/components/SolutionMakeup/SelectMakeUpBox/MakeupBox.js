import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton2, ButtonContainer2, SolutionTreatmentBox, HeaderBox } from '../SolutionMakeupStyleComponents';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import AddSolventCard from '../SolventCard/AddSolventCard';
import Typography from '@mui/material/Typography';


const MakeupBox = (props) => {

    return (
        <SolutionTreatmentBox>
            <HeaderBox>
                <Typography variant="h6" fontWeight="bold">Add Step</Typography>
            </HeaderBox>
            <ButtonContainer2>
                <CustomButton2 onClick={props.handleAddSolvent}>ADD SOLVENT</CustomButton2>
                <CustomButton2 onClick={props.handleAddPolymer}>ADD POLYMER</CustomButton2>
            </ButtonContainer2>
        </SolutionTreatmentBox>
    );
};

export default MakeupBox;