import React from 'react'

function Nav({ dogs }) {
    const dogNames = dogs.map(dog => dog.name);
    const navLinks = dogNames.map((name) => (
        <a href={`/dogs/${name}`}>{name}</a>
    ));
    return (
        <nav>
            {navLinks}
        </nav>
    );
}

export default Nav;