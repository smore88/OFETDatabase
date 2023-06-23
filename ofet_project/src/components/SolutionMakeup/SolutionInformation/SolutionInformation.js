import React, { useState } from 'react';

import { Headers, 
    SolventTextFields, 
    InputFieldsContainer, 
    HeaderContainer,  
    SolventDropDowns} from '../CustomStyleComponents.js'

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
        // this will be for entering the solution information
        // <div className='solution-info-card'>
        //     <div className='solution-info'>
        //         <label className='solLabel'>Enter Solution Information</label>
        //         <div className='input1'>
        //             <div className="entity-type-container">
        //                 <label>Entity Type:</label>
        //                 <select value={entityType} onChange={handleEntityType}>
        //                     <option value=''></option>
        //                         <option value='Solution'>Solution</option>
        //                 </select>
        //             </div>
        //             <div className="concentation-container">
        //                 <label>Concentration:</label>
        //                 <input type="text" />
        //             </div>
        //         </div>
        //     </div>
        // </div> 
        <div>
            <div className='solvent-info-card' >
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
