import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


import { FormControl } from '@mui/material';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './ChemicalTreat.css';

import { Headers, 
    SolventTextFields, 
    InputFieldsContainer, 
    HeaderContainer,  
    SolventDropDowns} from '../SubstratePretreatStyleComponents'

const ChemicalTreat = (props) => {
    const {number, onRemove} = props;

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='aging-info-card'>
                <HeaderContainer>
                    <Headers variant="subtitle1">Treatment Step {number}: Chemical Treatment</Headers>
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
                </InputFieldsContainer>

                {/* First 2 input boxes in row 1 */}
                <InputFieldsContainer>
                    <SolventTextFields
                        id="time"
                        label="Time(hr)"
                        variant="outlined">
                    </SolventTextFields>
                    
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

export default ChemicalTreat;