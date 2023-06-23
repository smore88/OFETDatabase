import React, { useState } from 'react';
import './SolMakeup.css';

const SolMakeup = (props) => {

    const [entityType, setEntityType] = useState('');

    const handleEntityType = (event) => {
        setEntityType(event.target.value);
    };

    return (
        // this will be for entering the solution information
        <div className='solution-info-card'>
            <div className='solution-info'>
                <label className='solLabel'>Enter Solution Information</label>
                <div className='input1'>
                    <div className="entity-type-container">
                        <label>Entity Type:</label>
                        <select value={entityType} onChange={handleEntityType}>
                            <option value=''></option>
                                <option value='Solution'>Solution</option>
                        </select>
                    </div>
                    <div className="concentation-container">
                        <label>Concentration:</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>

        // Adding Solvents, but we can have up to 4 solvents for example so nothing more than that 
    );
}

export default SolMakeup;
