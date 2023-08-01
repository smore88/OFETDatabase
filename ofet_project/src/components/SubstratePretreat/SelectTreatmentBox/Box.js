import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton, ButtonContainer, SolutionTreatmentBox, HeaderBox } from '../SubstratePretreatStyleComponents';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Typography from '@mui/material/Typography';


const Box = (props) => {

    return (
        <SolutionTreatmentBox>
            <HeaderBox>
                <Typography variant="h6" fontWeight="bold">Add Processing Step</Typography>
            </HeaderBox>
            <ButtonContainer>
                <CustomButton onClick={props.handleAddCT}>Chemical Treatment</CustomButton>
                <CustomButton onClick={props.handleAddUVO}>UV-Ozone</CustomButton>
                <CustomButton onClick={props.handleAddSAM}>SAM</CustomButton>
                <CustomButton onClick={props.handleAddPlas}>PLASMA</CustomButton>
                <CustomButton onClick={props.handleAddAnn}>ANNEALING</CustomButton>
                <CustomButton onClick={props.handleAddOther}>OTHER</CustomButton>
            </ButtonContainer>
        </SolutionTreatmentBox>
    );
};

export default Box;