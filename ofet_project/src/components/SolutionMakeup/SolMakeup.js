import React, { useState } from 'react';
import './SolMakeup.css';

const SolMakeup = (props) => {
    return (
        // this will be for entering the solution information
        <div className='solution-info-card'>
            <div className='solution-info'>
                <label>Enter Solution Information</label>
                <div className="entity-type-container">
                    <label>Entity Type:</label>
                    <input type="text" />
                </div>
                <div className="concentation-container">
                    <label>Concentration:</label>
                    <input type="text" />
                </div>
            </div>
        </div>

        // Adding Solvents, but we can have up to 4 solvents for example so nothing more than that 
    );
}

export default SolMakeup;
