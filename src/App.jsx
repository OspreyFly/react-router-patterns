import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ColorList from './ColorList';
import ColorFocus from './ColorFocus';
import ColorForm from './ColorForm';

function App() {
    const [colors, setColors] = useState([
        { name: "red", color: "#FF0000" },
        { name: "green", color: "#1AFF00" },
        { name: "blue", color: "#0034FF" }
    ]);

    const onColorSubmit = (newColor) => {
        console.log("RIGHT BEFORE: ", newColor);
        setColors([...colors, { name: newColor.name, color: newColor.color }]);
    };


    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/colors" element={<><ColorList colors={colors} /></>} />
                    <Route path="/colors/:name" element={<><ColorFocus colors={colors} /></>} />
                    <Route path="/colors/new" element={<ColorForm onColorSubmit={onColorSubmit} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
