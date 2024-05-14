import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
    let background = document.getElementById('background');
    background.style.backgroundColor = 'white';
    console.log("ColorsList: ", colors);

    return (
        <div>
            <h1>Welcome to the color factory.</h1>
            <Link to={"/colors/new"}>Add a color</Link>
            <p>Saved Colors:</p>
            <ul>
                {colors.map((color) => (
                    <li key={color.name}>
                        <Link to={`/colors/${color.name}`}>{color.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ColorList;
