import React, {useState} from "react";
import "./SubPre.css";
//import DataOriginForm from "../ExperimentalDataOriginScreen/DataOriginForm";

const SubstratePretreat = () => {

 const [selectedOption, setSelectedOption] = useState('');
 const [inputValue, setInputValue]= useState('');
   
 const handleOptionChange= (event) => {
    setSelectedOption(event.target.value);
    setInputValue('');
 };

 const handleInputChange = (event)=>{
    setInputValue(event.target.value);
 };

 const handleSubmit = (event)=> {
    event.preventDefault();
    console.log ('Selected option: ${selectedOption}');
    console.log ('Input value: ${inputValue}');
 };


 /* const [popupStyle, showPopup] = useState("hide")
    const popup= () => {
        showPopup("login-popup")
        setTimeout(()=> showPopup("hide"), 3000)
    }*/
const renderInputField =()=>{
    switch (selectedOption){
        case 'option1':

    return (
        <div> Desposition Type :
        <input 
            type="text"
            value="Spin"
            onChange={handleInputChange}
            placeholder=""
            />
        
         <div> Environment :
         <select>
                <option value="Air">Air</option>
                <option value="Nitrogen">Nitrogen</option>
                <option value="Argon">Argon</option>
                <option value="Inert">Inert</option>
                <option selected value =""></option>
            </select>
              <div> Spin Rate :
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder=""
            />
            </div>  
            <div> Spin Time :
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder=""
            />

<div> Deposited Volume :
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder=""
            />

<div> Temperature :
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder=""
            />
              <div> Injection Method :
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder=""
            />
              <div> Description :
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder=""
            />
            </div>  
            </div>  
            </div>  
            </div>  
            </div>  
             </div>
             </div>
    ); 
    case 'option2':

            return (
                <div> Desposition Type :
                <input 
                    type="text"
                    value="Blade"
                    onChange={handleInputChange}
                    placeholder=""
                    />
                
                 <div> Environment :
                 <select>
                        <option value="Air">Air</option>
                        <option value="Nitrogen">Nitrogen</option>
                        <option value="Argon">Argon</option>
                        <option value="Inert">Inert</option>
                        <option selected value =""></option>
                    </select>
                      <div> Spin Rate :
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder=""
                    />
                    </div>  
                    <div> Spin Time :
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder=""
                    />
        
        <div> Deposited Volume :
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder=""
                    />
        
        <div> Temperature :
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder=""
                    />
                      <div> Injection Method :
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder=""
                    />
                      <div> Description :
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder=""
                    />
                    </div>  
                    </div>  
                    </div>  
                    </div>  
                    </div>  
                     </div>
                     </div>
            );
            case 'option3':

            return (
                <input 
                    type="date"
                    value={inputValue}
                    onChange={handleInputChange}
                    />
            );
                    case 'option4':

                    return (
                        <input 
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Enter your favorite color"
                            />
                    );

            default:
                return null;
                    }
                };



return (
        <div className = "cover">  {/* creating containers/ creating  a classname helps me to target this container and make changes*/}
        <h1>Coating Process </h1> {/* text */}
        <h3>Instructions: </h3>{/* text */}
        <p>1. Fill in the experimental procedure to describe your processing in detail;</p>
        <p>2. Choose the overall processing method from the dropdown menu;</p>
        <p>3. Copy and paste each key processing step from the toolbox, in order, and fill out relevant details.      </p>
        <p>4. Fill in the Description/Fixed Value column with non-numerical descriptions or numerical results (Fixed Value).</p>
        <h3> Pick a segment that describes the processing step:  </h3>{/* text */}
        

        <div>
            <form onSubmit ={handleSubmit}>
           
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value=""> Select an option</option>
                <option value="option1"> Spin Coating</option>
                <option value="option2"> Blade Coating</option>
                <option value="option3"> Drop Casted </option>
                <option value="option4"> Other Coating Method</option>
            </select>
            {renderInputField()}
            <button type="submit">Submit</button>
        </form>
        </div>


        {/*<h4>Electrode contact dimensions and details:</h4>{/* text */}
       
    
       
       {/* <div> Electrode Configuration :*/}
          {/*  Electrode Configuration: <input type= "Text" placeholder=""/> */} 
             {/*<select>
                <option value="BGTC">BGTC</option>
                <option value="BGTC">BGBC</option>
                <option value="BGTC">TGTC</option>
                <option value="BGTC">TGBC</option>
                <option selected value =""></option>
            </select>
    </div> */}

        {/*<div className='Publication Type'>
                  <label>Publication Type</label>
                    <select value= {selectedValue} onChange={handleSelectChange}>
                        <option value=''>Select an option</option>
                        <option value='Literature'>Journal Article</option>
                        <option value='Laboratory'>Dissertation</option>
                        <option value='Laboratory'>Book</option>
    </select></div>*/}
        

{/*
        <div> Channel Length: <input type= "Text" placeholder=""/> µm</div>
        <div> Channel Width: <input type= "Text" placeholder=""/> µm</div>
        <div> Adhension Layer:   <select>
                <option value="Cr">Cr</option>
                <option value="MoO3">MoO3</option>
                <option selected value =""></option>
            </select> </div>


        <div> Electrode Material:   <select>
                <option value="Au">Au</option>
                <option value="Ag">Ag</option>
                <option selected value =""></option>
            </select> </div>
       
*/}
       {/* <h4>Substrate material details:</h4>{/* text */}
      
       {/* <div> Gate Material:  <select>
                <option value="n-doped Si">n-doped Si</option>
                <option value="Glass">Glass</option>
                <option value="PET">PET</option>
                <option selected value =""></option>
            </select> </div>
        <div> Dielectric 1 Material:  <select>
                <option value="SiO2">SiO2</option>
                <option value="Si3N4">Si3N4</option>
                <option value="Shellac">Shellac</option>
                <option value="PVP">PVP</option>
                <option value="PMMA">PMMA</option>
                <option value="PAN">PAN</option>
                <option value="CYTOP">CYTOP</option>
                <option value="6FDA-DABC">6FDA-DABC</option>
                <option selected value =""></option>
            </select> </div>
        <div> Dielectric 1 Thickness: <input type= "Text" placeholder=""/> nm </div>
        <div>Dielectric 2 Material:  <select>
        <option value="SiO2">SiO2</option>
                <option value="Si3N4">Si3N4</option>
                <option value="Shellac">Shellac</option>
                <option value="PVP">PVP</option>
                <option value="PMMA">PMMA</option>
                <option value="PAN">PAN</option>
                <option value="CYTOP">CYTOP</option>
                <option value="6FDA-DABC">6FDA-DABC</option>
            </select> </div>
        <div> Dielectric 2 Thickness: <input type= "Text" placeholder=""/> </div>
      
      
        <h4>Include other metadata here:</h4>{/* text */}
     {/*}  <div> Dielectric 1 Capacitance: <input type= "Text" placeholder=""/> nF/cm^2
</div>
        <div> Dielectric 2 Capacitance: <input type= "Text" placeholder=""/> nF/cm^2
</div>
        <div> Metadata 1: <input type= "Text" placeholder=""/> </div>
        <div>Metadata 2: <input type= "Text" placeholder=""/> </div>
        <div> Metadata 3: <input type= "Text" placeholder=""/> </div>


            <div className='next-button'>
              <button type='submit'>Next</button>
            </div> */}
     
        </div>   
    )
};

export default SubstratePretreat;