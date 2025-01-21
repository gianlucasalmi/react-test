import { useState } from "react";

export const Mapper = () => {
    const [fruits, setFruits] = useState([
        "mela",
        "banana",
        "ciliegia",
        "fragola",
        "mango",
    ]);

    const [inputValue, setInputValue] = useState("");

    return (
        <div style={{ margin: "100px" }}>
            {fruits.map((fruit) => {
                const result = fruit + " bello";
                return <div key={fruit}>{result}</div>;
            })}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                setInputValue(e.target.value);
            }}
            />
            <button onClick={() => setFruits([...fruits, inputValue])}> Inserisci </button>
        </div>
    );
};
