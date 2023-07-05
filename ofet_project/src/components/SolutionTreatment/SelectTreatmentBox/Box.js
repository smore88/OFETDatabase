import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton, ButtonContainer, SolutionTreatmentBox, HeaderBox } from '../SolutionTreatmentStyleComponents';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Typography from '@mui/material/Typography';


const Box = (props) => {

    return (
        <SolutionTreatmentBox>
            <HeaderBox>
                <Typography variant="h6" fontWeight="bold">Add Treatment Step</Typography>
            </HeaderBox>
            <ButtonContainer>
                <CustomButton onClick={props.handleAddPS}>POOR SOLVENT</CustomButton>
                <CustomButton onClick={props.handleAddM}>MIXING</CustomButton>
                <CustomButton onClick={props.handleAddUVI}>UV IRRADIATION</CustomButton>
                <CustomButton onClick={props.handleAddAging}>AGING</CustomButton>
                <CustomButton onClick={props.handleAddSonication}>SONICATION</CustomButton>
            </ButtonContainer>
        </SolutionTreatmentBox>
    );
};

export default Box;