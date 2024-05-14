import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ColorForm({ onColorSubmit }) {
    const [selectedColor, setSelectedColor] = useState({ name: '', color: '' });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        onColorSubmit(selectedColor);
        navigate("/colors");
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name == "color") {
            setSelectedColor({ ...selectedColor, "color": value });
        } else {
            setSelectedColor({ ...selectedColor, "name": value });
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Select a color:</label>
            <input
                type="color"
                id="color"
                name="color"
                value={selectedColor.color}
                onChange={handleChange}
            />
            <label htmlFor="color-name">Name:</label>
            <input
                type="text"
                name="name"
                id="color-name"
                placeholder="New Color Name"
                value={selectedColor.name}
                onChange={handleChange}
            />
            <button type="submit">Add Color</button>
        </form>
    );
}

export default ColorForm;
