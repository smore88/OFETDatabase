import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


import { FormControl } from '@mui/material';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './SonicationCard.css';

import { Headers, 
    SolventTextFields, 
    InputFieldsContainer, 
    HeaderContainer,  
    SolventDropDowns} from '../SolutionTreatmentStyleComponents.js'



const Sonication = (props) => {
    const {number, onRemove} = props;

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='sonication-info-card' >
            <HeaderContainer>
                    <Headers variant="subtitle1">Treatment Step {number}: Sonication</Headers>
                    <RemoveCircleOutlineIcon onClick={onRemove}></RemoveCircleOutlineIcon>
                </HeaderContainer>

                {/* First 2 input boxes in row 0 */}
                <InputFieldsContainer style={{ marginTop: 10 }}>
                    <FormControl>
                        <InputLabel id="environment-label">Environment</InputLabel>
                        <SolventDropDowns
                            id="environment-select"
                        >
                            <MenuItem value={"air"}>Air</MenuItem>
                            <MenuItem value={"nitrogen"}>Nitrogen</MenuItem>
                            <MenuItem value={"argon"}>Argon</MenuItem>
                            <MenuItem value={"inert"}>Inert</MenuItem>
                        </SolventDropDowns>
                    </FormControl>
                    
                    <SolventTextFields 
                        id="time"
                        label="Time(min)" 
                        variant="outlined">
                    </SolventTextFields>
                </InputFieldsContainer>

                {/* First 2 input boxes in row 1 */}
                <InputFieldsContainer>
                    <SolventTextFields
                        id="time"
                        label="Time(hr)"
                        variant="outlined">
                    </SolventTextFields>
                    
                    <SolventTextFields 
                        id="equipment_model"
                        label="Equipment Model" 
                        variant="outlined">
                    </SolventTextFields>
                </InputFieldsContainer>

                {/* First 2 input boxes in row 1 */}
                <InputFieldsContainer>
                    <SolventTextFields
                        id="frequency"
                        label="Frequency(kHz)"
                        variant="outlined">
                    </SolventTextFields>
                    
                    <SolventTextFields 
                        id="intensity"
                        label="Intensity(W cm2)" 
                        variant="outlined">
                    </SolventTextFields>
                </InputFieldsContainer>

                <InputFieldsContainer>
                    <SolventTextFields
                        id="description"
                        label="Description"
                        variant="outlined">
                    </SolventTextFields>
                </InputFieldsContainer>
            </div>
        </div>
    );
}

export default Sonication;