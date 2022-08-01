import React, { useState } from 'react';

const TrainerCard = ({ name, num }) => {
    const [pokemonCount, setPokemonCount] = useState(num);

    const catchPoke = () => {
        let newCount = pokemonCount + 1
        setPokemonCount(newCount)
    }

    const excitedName = name.toUpperCase() + "!";

    return (
        <>
            <h1>Hi my name is {name} and if I shout it looks like this {excitedName}</h1>
            <p>I started with {num} pokemon!</p>
            <button onClick={catchPoke}>Catch a pokemon</button>
            <p>Now I have {pokemonCount}</p>
        </>
    )
}

export default TrainerCard