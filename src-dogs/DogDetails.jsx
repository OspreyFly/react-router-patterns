import React from 'react';
import { useParams } from 'react-router-dom';
function DogDetails({ dogs }) {
    const { name } = useParams();
    const dog = dogs.find(d => d.name === name);
    console.log(dogs);
    if (!dog) {
        return <div>No dog found with the given name.</div>;
    }

    return (
        <div>
            <img src={dog.src} alt={dog.name} width="200" />
            <h2>{dog.name}</h2>
            <p>Age: {dog.age}</p>
            <ul>
                {dog.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
}

export default DogDetails;
