import React, { useState } from "react";
import './ixSelector.css';

export function IxSelector(props) {
    const [eleven, setEleven] = useState('4-4-2')

    const handleChange = (e) => {
        setEleven(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.testFunc(eleven);
    }

    return (
        <div>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <input type="radio" value="4-4-2" name="eleven" /> 4-4-2
                <input type="radio" value="4-3-3" name="eleven" /> 4-3-3
                <input type="radio" value="5-3-2" name="eleven" /> 5-3-2
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}