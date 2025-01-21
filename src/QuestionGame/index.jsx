import React, { useState } from "react";

export const QuestionGame = () => {
    const [steps, setStep] = useState(0);
    const [wins, setWins] = useState(0);

    return (
        <>
        <p> Vittorie: {wins} </p>
        {steps === 0 && (
        <div>
            <p> Quanto fa 2+2 </p>
            <button onClick={()=>setStep(1)}> 4</button>
            <button onClick={()=>alert("Hai Sbagliato!")}> 7</button>
        </div>
    )}
    {steps === 1 && (
        <div>
            <p> Capitale della Lettonia </p>
            <button onClick={()=> {
                alert("Hai Sbagliato!");
                setStep(0)
        }}> Monaco </button>
            <button onClick={()=>setStep(2)}> Riga </button>
        </div>
    )}
     {steps === 2 && (
        <div>
            <p> Quando e stata scoperta l'America </p>
            <button onClick={()=> {
             setStep(3);
             setWins(wins + 1)}}
             > 1492 </button>
            <button onClick={()=> {
                alert("Hai Sbagliato!");
                setStep(0)
        }}> 1507 </button>
        </div>
    )}

    {steps === 3 && (<div><h1> Hai Vinto</h1> <button onClick={()=> setStep(0)}> Ricomincia </button></div>)}

    </>
    );
};