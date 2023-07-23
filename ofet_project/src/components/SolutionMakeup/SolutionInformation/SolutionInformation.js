import React, { useState } from 'react';

import { Headers, 
    SolventTextFields, 
    InputFieldsContainer, 
    HeaderContainer,  
    SolventDropDowns} from '../SolutionMakeupStyleComponents.js'

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { FormControl } from '@mui/material';

import './SolutionInformation.css';

const SolutionInformation = (props) => {

    const [entityType, setEntityType] = useState('');

    const handleEntityType = (event) => {
        setEntityType(event.target.value);
    };

    return (
        <div>
            <div className='addsolvent-info-card'>
                <HeaderContainer>
                    <Headers variant="subtitle1">Enter Solution Information</Headers> 
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
                            <MenuItem value={"solution"}>Solution</MenuItem>
                        </SolventDropDowns>
                    </FormControl>
                            
                    <SolventTextFields
                        id="concentration_"
                        label="Concentration"
                        variant="outlined">
                    </SolventTextFields>
                </InputFieldsContainer>
            </div>
        </div>
    );
}

export default SolutionInformation;
