import React, {useState} from "react";
import "./DevF.css";
//import DataOriginForm from "../ExperimentalDataOriginScreen/DataOriginForm";

const DeviceFabrication = () => {

 {/** *   const Dropdown = () => {
        const [selectedValue, setSelectedValue] = useState('');

        const handleSelectChange = (event) => {
          setSelectedValue(event.target.value);
        };
   /}
   /* const [popupStyle, showPopup] = useState("hide")
    const popup= () => {
        showPopup("login-popup")
        setTimeout(()=> showPopup("hide"), 3000)
    }*/

    return (

        <div className = "cover">  {/* creating containers/ creating  a classname helps me to target this container and make changes*/}
        <h1>Device Substrate</h1> {/* text */}
        <h3>Instructions: Fill out the available information.Leave blank if not available of applicable.</h3>{/* text */}
        <h4>Electrode contact dimensions and details:</h4>{/* text */}
       
    
       
        <div> Electrode Configuration :
          {/*  Electrode Configuration: <input type= "Text" placeholder=""/> */} 
            <select>
                <option value="BGTC">BGTC</option>
                <option value="BGTC">BGBC</option>
                <option value="BGTC">TGTC</option>
                <option value="BGTC">TGBC</option>
                <option selected value =""></option>
            </select>
        </div>

        {/*<div className='Publication Type'>
                  <label>Publication Type</label>
                    <select value= {selectedValue} onChange={handleSelectChange}>
                        <option value=''>Select an option</option>
                        <option value='Literature'>Journal Article</option>
                        <option value='Laboratory'>Dissertation</option>
                        <option value='Laboratory'>Book</option>
    </select></div>*/}
        


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
       
       
        <h4>Substrate material details:</h4>{/* text */}
      
        <div> Gate Material:  <select>
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
        <div> Dielectric 1 Capacitance: <input type= "Text" placeholder=""/> nF/cm^2
</div>
        <div> Dielectric 2 Capacitance: <input type= "Text" placeholder=""/> nF/cm^2
</div>
        <div> Metadata 1: <input type= "Text" placeholder=""/> </div>
        <div>Metadata 2: <input type= "Text" placeholder=""/> </div>
        <div> Metadata 3: <input type= "Text" placeholder=""/> </div>


            <div className='next-button'>
              <button type='submit'>Next</button>
            </div>
     
        </div>
    )
 };
};

export default DeviceFabrication;