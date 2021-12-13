import React from "react";
import './ixSelector.css';

export function IxSelector({
    selectEleven,
    eleven,
    handleChange
}) {


    return (
        <div>
            <form  onSubmit={selectEleven}>
                <label>
                    <input 
                        type="radio" 
                        value="four-four-two" 
                        name="eleven" 
                        checked={eleven === "four-four-two"} 
                        onChange={handleChange}
                    /> 4-4-2
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="four-three-three" 
                        name="eleven" 
                        checked={eleven === "four-three-three"} 
                        onChange={handleChange}
                    /> 4-3-3
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="five-three-two" 
                        name="eleven" 
                        checked={eleven === "five-three-two"} 
                        onChange={handleChange}
                        placeholder="five-three-two" 
                    /> 5-3-2
                </label>
                <br></br>
                <button type="submit">Generate IX</button>
            </form>
        </div>
    )
}