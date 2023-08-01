import React, { useState } from 'react';
import { Container, ContainerLabel, 
    InputFieldsContainer, CustomTextField, SolventDropDowns} from './DeviceFabricationStyleComponents';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Form } from 'react-router-dom';

const OtherMetaData = () => {

    return (
        <div>
			<div className='solvent-info-card'>
				<ContainerLabel>Other Metadata</ContainerLabel>
				
				<InputFieldsContainer>
					<CustomTextField
						id="dielectric1-capac"
                        label="Dielectric 1 Capacitance" 
                        variant="outlined">
					</CustomTextField>

					<CustomTextField
						id="dielectric2-capac"
						label="Dielectric 2 Capacitance" 
						variant="outlined">
					</CustomTextField>
				</InputFieldsContainer>

				<InputFieldsContainer>
					<CustomTextField
                        id="metadata1"
                        label="Metadata 1"
                        variant="outlined">
                    </CustomTextField>
                    
                    <CustomTextField 
                        id="metadata2"
                        label="Metadata 2" 
                        variant="outlined">
                    </CustomTextField>

				</InputFieldsContainer>

				<InputFieldsContainer>
					<CustomTextField
						id="metadata3"
						label="Metadata 3"
						variant="outlined">
					</CustomTextField>
				</InputFieldsContainer>
			</div>
        </div>
    );
};

export default OtherMetaData;