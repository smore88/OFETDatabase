import React, { useState } from 'react';
import './DataOriginForm.css';

const DataOriginForm = (props) => {

    /*
    * We create a state variable called 'citationType' using the useState hook
    * When a value is selected from the dropdown menu, the handleCitation function is called to update the 'citationType' with the new value
    * Then based on the citationType different text fields are emerged and the box dynamically shifts
    */

    const [citationType, setCitationType] = useState('');

    const handleCitation = (event) => {
        setCitationType(event.target.value);
    };

    /*
    * I am creating a state variable called 'publicationType' using the useState hook
    * When a value is selected from the dropdown menu, the handlePublicationType function is called to update the 'publicationType' with the new
    * value.
    */

    const [publicationType, setPublicationType] = useState('')

    const handlePublicationType = (event) => {
        setPublicationType(event.target.value);
    }; 
    
    // Changing the values for the literature menu
    let LitTextFields = null;
    if (citationType === 'Literature') {
        LitTextFields = (
            <div className='new-lit-fields'>
                <div className='publication-type'>
                    <label>Publication Type</label>
                    <select value={publicationType} onChange={handlePublicationType}>
                        <option value=''>Select an option</option>
                        <option value='Literature'>Journal Article</option>
                        <option value='Laboratory'>Dissertation</option>
                        <option value='Laboratory'>Book</option>
                    </select>
                </div>
                <div className='new-lit-field'>
                    <label>Journal</label>
                    <input type='text' />
                </div>
                <div className='new-lit-field'>
                    <label>Title</label>
                    <input type='text' />
                </div>
                <div className='new-lit-field'>
                    <label>Enter Authors</label>
                    <input type='text' />
                </div>
                <div className='new-lit-field'>
                    <label>Enter Keywords</label>
                    <input type='text' />
                </div>
                <div className='new-lit-field'>
                    <label>Publication Year</label>
                    <input type='text' />
                </div>
                <div className='new-lit-field'>
                    <label>Volume</label>
                    <input type='text' />
                </div>
                <div className='new-lit-field'>
                    <label>Issue</label>
                    <input type='text' />
                </div>
                <div className='new-lit-field'>
                    <label>Url</label>
                    <input type='text' />
                </div>
                <div className='new-lit-field'>
                    <label>Language</label>
                    <input type='text' />
                </div>
                <div className='new-lit-field'>
                    <label>Location</label>
                    <input type='text' />
                </div>
                <div className='new-lit-field'>
                    <label>Date Of Citation</label>
                    <input type='text' />
                </div>
            </div>
        );
    }

    // Changing the values for the laboratory menu
    let LabTextFields = null;
    const todaysDate = new Date().toISOString().split('T')[0];
    if (citationType === 'Laboratory') {
        LabTextFields = (
            <div className='new-lab-fields'>
                <div className='new-lab-field'>
                    <label>Sample Date</label>
                    <input
                        type='date' 
                        min='1970-01-01' 
                        max={todaysDate}>
                    </input>
                </div>
                <div className='new-lab-field'>
                    <label>Lab Notebook ID</label>
                    <input type='text' />
                </div>
                <div className='new-lab-field'>
                    <label>Lab Sample ID</label>
                    <input type='text' />
                </div>
            </div>
        );
    }

    //Adding the 'Next' Button upon the 'Laboratory' or the 'Literature' menu drop down click
    let addButton = null;
    if(citationType === 'Literature' || citationType === 'Laboratory') {
        addButton = (
            <div className='next-button'>
              <button type='submit'>Next</button>
            </div>
        );
    }

    return (
        <form>
            <div className='add-origin-info-backdrop'>
                <div className='citation-type'>
                    <label>Citation Type</label>
                    <select value={citationType} onChange={handleCitation}>
                        <option value=''>Select an option</option>
                        <option value='Literature'>Literature</option>
                        <option value='Laboratory'>Laboratory</option>
                    </select>
                </div>
                {LitTextFields}
                {LabTextFields}
                {addButton}
            </div>
        </form>
    );
};

export default DataOriginForm;