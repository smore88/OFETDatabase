import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


import { FormControl } from '@mui/material';

//import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { Headers, 
    DevTextFields, 
    DevFieldsContainer, 
    HeaderContainer,  
    DevDropDowns} from '../DeviceFabricationStyleComponents.js'

import './Substrate.css';



const substrate = (props) => {
    const {number, onRemove} = props;

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='solvent-info-card' >
                <HeaderContainer>
                    <Headers variant="subtitle1">Substrate Material Details: {number}</Headers>
                 {/**  <RemoveCircleOutlineIcon onClick={onRemove}></RemoveCircleOutlineIcon> */} 
                </HeaderContainer>

                {/* First 2 input boxes in row 0 */}
                <DevFieldsContainer style={{ marginTop: 10 }}>
                    <FormControl>
                        <InputLabel id="gate-material">Gate Material</InputLabel>
                        <DevDropDowns
                            id="gate-material-select"
                        >
                            <MenuItem value={"n-doped-si"}>n-doped Si</MenuItem>
                            <MenuItem value={"glass"}>Glass</MenuItem>
                            <MenuItem value={"pet"}>PET</MenuItem>
                        </DevDropDowns>
                    </FormControl>
                    
                    <FormControl>
                        <InputLabel id="dielectric1-material">Dielelectric 1 Material</InputLabel>
                        <DevDropDowns
                            id="dielectric-material-select"
                        >
                            <MenuItem value={"sio2"}>SiO2</MenuItem>
                            <MenuItem value={"si3n4"}>Si3N4</MenuItem>
                            <MenuItem value={"Shellac"}>Shellac</MenuItem>
                            <MenuItem value={"pvp"}>PVP</MenuItem>
                            <MenuItem value={"pmma"}>PMMA</MenuItem>
                            <MenuItem value={"pan"}>PAN</MenuItem>
                            <MenuItem value={"cytop"}>CYTOP</MenuItem>
                            <MenuItem value={"6fda-dabc"}>6FDA-DABC</MenuItem>
                        </DevDropDowns>
                    </FormControl>
                    
                </DevFieldsContainer>

                {/* First 2 input boxes in row 1 */}
                <DevFieldsContainer>
                    <DevTextFields
                        id="dielectric1-thickness"
                        label="Dielectric 1 Thickness"
                        variant="outlined">
                    </DevTextFields>
                    
                    <FormControl>
                        <InputLabel id="dielectric1-material">Dielelectric 1 Material</InputLabel>
                        <DevDropDowns
                            id="dielectric-material-select"
                        >
                            <MenuItem value={"sio2"}>SiO2</MenuItem>
                            <MenuItem value={"si3n4"}>Si3N4</MenuItem>
                            <MenuItem value={"Shellac"}>Shellac</MenuItem>
                            <MenuItem value={"pvp"}>PVP</MenuItem>
                            <MenuItem value={"pmma"}>PMMA</MenuItem>
                            <MenuItem value={"pan"}>PAN</MenuItem>
                            <MenuItem value={"cytop"}>CYTOP</MenuItem>
                            <MenuItem value={"6fda-dabc"}>6FDA-DABC</MenuItem>
                        </DevDropDowns>
                    </FormControl>
                </DevFieldsContainer>

                {/* First 2 input boxes in row 2 */}
                <DevFieldsContainer>
                    <DevTextFields
                       id="dielectric2-thickness"
                       label="Dielectric 2 Thickness"
                        variant="outlined">
                    </DevTextFields>
                </DevFieldsContainer>
            </div>
        </div>
    );
}

export default substrate;