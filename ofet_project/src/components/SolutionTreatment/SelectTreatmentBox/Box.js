import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton, ButtonContainer, SolutionTreatmentBox, HeaderBox } from '../CustomStyleComponents';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Typography from '@mui/material/Typography';


const Box = (props) => {

    return (
        <SolutionTreatmentBox>
            <HeaderBox>
                <Typography variant="h6" fontWeight="bold">Select Treatment Step</Typography>
            </HeaderBox>
            <ButtonContainer>
                <CustomButton>POOR SOLVENT</CustomButton>
                <CustomButton>MIXING</CustomButton>
                <CustomButton>UV IRRADIATION</CustomButton>
                <CustomButton>AGING</CustomButton>
                <CustomButton>SONICATION</CustomButton>
            </ButtonContainer>
        </SolutionTreatmentBox>
    );
};

export default Box;