import React, { useState } from 'react';
import { Container, ContainerLabel, 
    FieldsContainer, CustomTextField } from '../DataOriginStyleComponents';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const LiteratureCard = () => {

    return (
        <Container>
            <ContainerLabel>Literature Data Information</ContainerLabel>
            <FieldsContainer>
                <CustomTextField
                    id="publication_type"
                    label="Publication Type"
                    variant="outlined">
                </CustomTextField>
                
                <CustomTextField 
                    id="publisher"
                    label="Publisher"
                    variant="outlined">
                </CustomTextField>
            </FieldsContainer>

            <FieldsContainer>
                <CustomTextField
                    id="journal"
                    label="Journal"
                    variant="outlined">
                </CustomTextField>
                
                <CustomTextField 
                    id="title"
                    label="Title"
                    variant="outlined">
                </CustomTextField>
            </FieldsContainer>

            <FieldsContainer>
                <CustomTextField
                    id="author1"
                    label="Author 1"
                    variant="outlined">
                </CustomTextField>
                
                <CustomTextField 
                    id="author2"
                    label="Author 2"
                    variant="outlined">
                </CustomTextField>
            </FieldsContainer>

            <FieldsContainer>
                <CustomTextField
                    id="keyword1"
                    label="Keyword 1"
                    variant="outlined">
                </CustomTextField>
                
                <CustomTextField 
                    id="keyword2"
                    label="Keyword 2"
                    variant="outlined">
                </CustomTextField>
            </FieldsContainer>

            <FieldsContainer>
                <CustomTextField
                    id="publication_year"
                    label="Publication Year"
                    variant="outlined">
                </CustomTextField>
                
                <CustomTextField 
                    id="volume"
                    label="Volume"
                    variant="outlined">
                </CustomTextField>
            </FieldsContainer>

            <FieldsContainer>
                <CustomTextField
                    id="issue"
                    label="Issue"
                    variant="outlined">
                </CustomTextField>
                
                <CustomTextField 
                    id="url"
                    label="URL"
                    variant="outlined">
                </CustomTextField>
            </FieldsContainer>

            <FieldsContainer>
                <CustomTextField
                    id="language"
                    label="Language"
                    variant="outlined">
                </CustomTextField>
                
                <CustomTextField 
                    id="location"
                    label="Location"
                    variant="outlined">
                </CustomTextField>
            </FieldsContainer>

            <FieldsContainer>
                <CustomTextField
                    id="date_of_citation"
                    label="Citation Date"
                    variant="outlined">
                </CustomTextField>
            </FieldsContainer>
        </Container>
    );
};

export default LiteratureCard;