import { useManageCounter } from "../useManageCounter";
import "./Counter.css";

export const Counter = () => {
    const [count, increaseCount, decreaseCount, setToZero] = useManageCounter();

    return (
        <div>
            <h1> Counter: {count}</h1>
            <button onClick={increaseCount}> Increase</button>
            <button onClick={decreaseCount} >Decrease</button>
            <button onClick={setToZero}> Set To Zero</button>
        </div>
    );
}