// CheckboxEstilizado.jsx
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './checkbox.scss';

const CheckboxEstilizado = ({ id }) => { // Adicionando uma prop 'id'
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                id={id} // Usando o ID recebido como prop
                checked={checked}
                onChange={handleCheckboxChange}
                className="checkbox-input"
            />
            <label htmlFor={id} className={`checkbox-label ${checked ? 'checked' : ''}`}>
                {checked ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
            </label>
        </div>
    );
};

export default CheckboxEstilizado;
