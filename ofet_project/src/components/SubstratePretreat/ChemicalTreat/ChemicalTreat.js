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
                        <InputLabel id="ipuacname-label">Iupac Name</InputLabel>
                        <SolventDropDowns
                            id="ipuacname-select"
                        >
                            <MenuItem value={"chloroform"}>Chloroform</MenuItem>
                            <MenuItem value={"chlorobenzene"}>Chlorobenzene</MenuItem>
                            <MenuItem value={"12-dicho"}>1,2-dichlorobenzene</MenuItem>
                            <MenuItem value={"124-tricho"}>1,2,4-tricholorobenzene</MenuItem>
                            <MenuItem value={"toluene"}>Toluene</MenuItem>
                            <MenuItem value={"p-xylene"}>p-xylene</MenuItem>
                            <MenuItem value={"methanol"}>Methanol</MenuItem>
                            <MenuItem value={"isopro"}>Isopropanol</MenuItem>
                            <MenuItem value={"acetone"}>Acetone</MenuItem>
                        </SolventDropDowns>
                    </FormControl>
                </InputFieldsContainer>

                {/* First 2 input boxes in row 1 */}
                <InputFieldsContainer>
                    <SolventTextFields
                        id="temp"
                        label="Temperature"
                        variant="outlined">
                    </SolventTextFields>
                    
                    <SolventTextFields 
                        id="time"
                        label="Time" 
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

export default ChemicalTreat;