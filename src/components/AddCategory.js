import React, { useState } from 'react'

export default function AddCategory() {

    const [inputValue, setInputValue] = useState('Hola Mundo');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={inputValue}
            onChange={ handleInputChange }></input>
        </form>
    )
}
