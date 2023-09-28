// import { useState } from "react";

// making an interface to assign to props, effectively binding
// the props passed to the component to specific criteria
interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Country;
}


// using an enum to limit the number of options from Country
export enum Country {
    Brazil = "Brazil",
    Canada = "Canada",
    France = "France",

}

export const Person = (props : Props) => {
    // this is how to bind a veriable to a specific type
    // const name: string = "Ali";

    // making a state with set type of variable
    // const [theName, setTheName] = useState<string>();
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This Person {props.isMarried? "is": "is not"} Married</h1>
            {props.friends.map((friend: string) => <h1>{friend}</h1>)}

            <h1>Country: {props.country}</h1>
        </div>
    );
}
