import React from 'react';
import { Link } from 'react-router-dom'


function DogList({ dogs }) {
  return (
    <div>
      <h2>Dog List</h2>
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            <Link to={`/dogs/${dog.name}`}>
              <img src={dog.src} alt={dog.name} width="100" />
              <p>{dog.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
