import React, { useState, useEffect } from 'react';
import PokemonIndex from './components/PokemonIndex';
import TrainerCard from './components/TrainerCard';

const App = () => {
    const [trainers, settrainers] = useState([
        {
            name: "Ash", num: 6
        },
        {
            name: "Misty", num: 8
        },
        {
            name: "Brock", num: 2
        }
    ])
    // Trainers is used when you want to reference 
    // the original piece of data and setTrainers is 
    // used when you want to update the pice of data
    // When originally define state, you must give it a value

    // const trainers = [
    //     {
    //         name: "Ash", num: "6"
    //     },
    //     {
    //         name: "Misty", num: "8"
    //     },
    //     {
    //         name: "Brock", num: "2"
    //     }
    // ]

    const renderTrainerCards = () => trainers.map((trainer, index) => <TrainerCard key={index} name={trainer.name} num={trainer.num}/>)
    
    return (
        <>
            <PokemonIndex />
            {renderTrainerCards()}
            {/* <h2>Hi I'm {name} and I have pokemon!</h2>
            <h2>Hi I'm {otherName} and I have pokemon!</h2> */}
        </>
    )
}

export default App;