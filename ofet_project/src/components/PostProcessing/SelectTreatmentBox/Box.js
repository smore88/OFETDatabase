import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton, ButtonContainer, SolutionTreatmentBox, HeaderBox } from '../PostProcessingStyleComponents';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Typography from '@mui/material/Typography';


const Box = (props) => {

    return (
        <SolutionTreatmentBox>
            <HeaderBox>
                <Typography variant="h6" fontWeight="bold">Add Processing Step</Typography>
            </HeaderBox>
            <ButtonContainer>
                <CustomButton onClick={props.handleAddAnn}>ANNEALING</CustomButton>
                <CustomButton onClick={props.handleAddCT}>CHEMICAL TREATMENT</CustomButton>
                <CustomButton onClick={props.handleAddOth}>OTHER</CustomButton>
            </ButtonContainer>
        </SolutionTreatmentBox>
    );
};

export default Box;