import { useState } from "react";

export const useManageCounter = (initial = 0) => {
    const [count, setCount] = useState(initial);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    const setToZero = () => {
        setCount(0);
    }

    return [count, increaseCount, decreaseCount, setToZero];
}