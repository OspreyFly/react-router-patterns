import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
function ColorFocus({ colors }) {
    const { name } = useParams();
    const color = colors.find(d => d.name === name);
    console.log(color);
    if (!color) {
        return <Navigate to={"/colors"} />
    }
    let background = document.getElementById('background');
    background.style.backgroundColor = color.color;

    return (
        <div>
            <h1>This is {color.name}. Isn't it beautiful?</h1>
        </div>
    )
}

export default ColorFocus;