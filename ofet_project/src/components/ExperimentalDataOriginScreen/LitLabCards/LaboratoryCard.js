import React, { useState } from 'react';
import { Container, ContainerLabel, 
    FieldsContainer, CustomTextField } from '../DataOriginStyleComponents';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const LaboratoryCard = () => {

    return (
        <Container>
            <ContainerLabel>Laboratory Data Information</ContainerLabel>
            <FieldsContainer>
                <CustomTextField
                    id="sample_date"
                    label="Date"
                    variant="outlined">
                </CustomTextField>
                
                <CustomTextField 
                    id="lab_notebook_id"
                    label="Lab Notebook ID" 
                    variant="outlined">
                </CustomTextField>
            </FieldsContainer>
            <FieldsContainer>
                <CustomTextField
                    id="lab_sample_id"
                    label="Lab Sample ID"
                    variant="outlined">
                </CustomTextField>
            </FieldsContainer>
        </Container>
    );
};

export default LaboratoryCard;