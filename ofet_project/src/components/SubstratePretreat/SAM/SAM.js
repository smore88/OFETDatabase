import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


import { FormControl } from '@mui/material';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './SAM.css';

import { Headers, 
    SolventTextFields, 
    InputFieldsContainer, 
    HeaderContainer,  
    SolventDropDowns} from '../SubstratePretreatStyleComponents'

const SAM = (props) => {
    const {number, onRemove} = props;

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='sam-info-card'>
                <HeaderContainer>
                    <Headers variant="subtitle1">Treatment Step {number}: Self-Assembled Monolayer</Headers>
                    <RemoveCircleOutlineIcon onClick={onRemove}></RemoveCircleOutlineIcon>
                </HeaderContainer>                

                {/* First 2 input boxes in row 1 */}
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
                        <InputLabel id="SAM-label">SAM Name</InputLabel>
                        <SolventDropDowns
                            id="SAM-select"
                        >
                            <MenuItem value={"pts"}>PTS</MenuItem>
                            <MenuItem value={"dts"}>DTS</MenuItem>
                            <MenuItem value={"mts"}>MTS</MenuItem>
                            <MenuItem value={"ots18"}>OTS-18</MenuItem>
                            <MenuItem value={"ots8"}>OTS-8</MenuItem>
                            <MenuItem value={"hdms"}>HDMS</MenuItem>
                            <MenuItem value={"fdts"}>FDTS</MenuItem>
                        </SolventDropDowns>
                    </FormControl>
                </InputFieldsContainer>

                <InputFieldsContainer>
                    <SolventTextFields
                        id="iupac_name"
                        label="Iupac Name"
                        variant="outlined">
                    </SolventTextFields>

					<SolventTextFields
                        id="pubchem_cid"
                        label="Pubchem CID"
                        variant="outlined">
                    </SolventTextFields>
                </InputFieldsContainer>

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
            </div>
        </div>
    );
}

export default SAM;