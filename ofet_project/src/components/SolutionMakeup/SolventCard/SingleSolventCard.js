import React, { useState } from 'react';
import { Headers, 
    SolventTextFields, 
    InputFieldsContainer, 
    HeaderContainer, 
    CustomButton, 
    SolventDropDowns,
    ButtonContainer } from '../SolutionMakeupStyleComponents.js'

import AddIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


import './SingleSolventCard.css';
import { FormControl } from '@mui/material';


const SingleSolventCard = (props) => {
    const {number, onRemove} = props;
    
    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='addsolvent-info-card' >
                {/* below will be for the name and addIcon */}
                <HeaderContainer>
                    <Headers variant="subtitle1">Solvent {number}</Headers>
                    <RemoveCircleOutlineIcon onClick={onRemove}></RemoveCircleOutlineIcon>
                </HeaderContainer>

                {/* First 2 input boxes in row 0 */}
                <InputFieldsContainer>
                    <FormControl>
                        <InputLabel id="entity-type-label">Entity Type</InputLabel>
                        <SolventDropDowns
                            id="entity-type-select"
                            // value={age}
                            label="entity-type"
                            // onChange={handleChange}
                        >
                            <MenuItem value={"Solvent"}>Solvent</MenuItem>
                        </SolventDropDowns>
                    </FormControl>
                    
                    <FormControl>
                        <InputLabel id="iupac-name-label">Iupac Name</InputLabel>
                        <SolventDropDowns
                            id="iupac-name-select"
                            // value={age}
                            label="iupac-name"
                            // onChange={handleChange}
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
                        id="vol_frac"
                        label="Vol Frac" 
                        variant="outlined">
                    </SolventTextFields>
                </InputFieldsContainer>
            </div>
        </div>
    );
}

export default SingleSolventCard;