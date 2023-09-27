// hooks have 3 rules
// 1. Its name should start from "use"
// 2. It should be in the highest component i.e., App component for App.js,
    // Form component for Form.js, etc
//3. It should not be in a function

import { useState } from "react"

// A Hook is like a function that abstracts logic, but:
// function() { useHook } - does not work
// useHook() { useAnotherHook } - works

export const useToggle = (initial = false) => {
    const [state, setState] = useState(initial);

    const toggle = () => {
        setState((prev) => !prev);
    }

    // we don't return JSX, hook only handle computational logic
    // return the current state and toggle function for use
    return [state, toggle];
}