import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './PoorSolventCard.css';

import { Headers, 
    SolventTextFields, 
    InputFieldsContainer, 
    HeaderContainer,  
    SolventDropDowns} from '../SolutionTreatmentStyleComponents.js'


const PoorSolvent = (props) => {
    const {number, onRemove} = props;

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='poor-solvent-info-card' >
                <HeaderContainer>
                    <Headers variant="subtitle1">Treatment Step {number}: Poor Solvent</Headers>
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
                        <InputLabel label="iupac-name-label">Iupac Name</InputLabel>
                        <SolventDropDowns
                            id="iupac-name-select"
                        >
                            <MenuItem value={"chloroform"}>chloroform</MenuItem>
                            <MenuItem value={"cholorbenzene"}>cholorbenzene</MenuItem>
                            <MenuItem value={"1,2-dicholorobenzene"}>1,2-dicholorobenzene</MenuItem>
                            <MenuItem value={"1,2,4-tricholorobenzene"}>1,2,4-tricholorobenzene</MenuItem>
                            <MenuItem value={"toluene"}>toluene</MenuItem>
                            <MenuItem value={"p-xylene"}>p-xylene</MenuItem>
                            <MenuItem value={"methanol"}>methanol</MenuItem>
                            <MenuItem value={"isopropanol"}>isopropanol</MenuItem>
                            <MenuItem value={"acetone"}>acetone</MenuItem>
                        </SolventDropDowns>
                    </FormControl>
                </InputFieldsContainer>

                {/* First 2 input boxes in row 1 */}
                <InputFieldsContainer>
                    <SolventTextFields
                        id="pubchem_cid"
                        label="Pubchem CID"
                        variant="outlined">
                    </SolventTextFields>
                    
                    <SolventTextFields 
                        id="vol_frac_added"
                        label="Vol Frac Added" 
                        variant="outlined">
                    </SolventTextFields>
                </InputFieldsContainer>

                {/* First 2 input boxes in row 2 */}
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

export default PoorSolvent;