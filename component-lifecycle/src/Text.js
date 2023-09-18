import React from "react";
import { useState, useEffect } from 'react';

export const Text = () => {
    const [text, setText] = useState("");

    // useEffect take the first parameter as a function which is
    // triggered by default everytime a useState state changes
    // the second argument only applies the passed function to be
    // triggered when one of the array's element is changed
    // (the arrays contains useState states)
    useEffect(() => {
        console.log("Component Mounted!");
        // this function only executes when the component unmounts
        return (() => {
            console.log("Component Unmounted!");
        });
    }, []);

    return (
        <div style={{marginTop: 12}}>
            <input
            style={ {fontSize: 20} }
            onChange={ (event) => {setText(event.target.value)} } />

            <h2 style={{marginTop: 12}}> {text} </h2>
        </div>
    );
}