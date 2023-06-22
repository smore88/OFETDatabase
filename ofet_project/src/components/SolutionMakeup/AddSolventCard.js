import React, { useState } from 'react';
import SolMakeSolvent from "./SolMakeSolvent";
import AddIcon from '@mui/icons-material/AddOutlined';


const AddSolventCard = (props) => {
    // 1) Keep track of all the current cards and update the state of the card so initially there is going to just be 1 card.
    const [solventCardCount, setSolventCardCount] = useState(1);

    // 2) add to the cardCount each time this function is called
    const handleSolventCard = () => {
        setSolventCardCount(solventCardCount => solventCardCount + 1);
    }

    return (
        <div>
            {Array.from({ length: solventCardCount }).map((_, index) => (
                <div className='solvent-info-card' key={index}>
                    <SolMakeSolvent></SolMakeSolvent>
                    {/* <p>Card {index + 1}</p> */}
                </div>
            ))}
            <div>
                <AddIcon onClick={handleSolventCard} />
            </div>
        </div>
    );
};

export default AddSolventCard;
