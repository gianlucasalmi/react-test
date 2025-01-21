
export const Counter = ({counter, setCounter}) => {
    
    return (
        <div>
        <p>Counter: {counter}</p>
        <button onClick={setCounter}>Aumenta</button>
        </div>
    );
    }