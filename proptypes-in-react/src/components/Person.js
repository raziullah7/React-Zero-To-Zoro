import PropTypes from "prop-types";

export const Person = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This Person {props.isMarried? "is": "is not"} Married</h1>
            {props.friends.map((friend) => <h1>{friend}</h1>)}
        </div>
    );
}

// we are binding types here, but even if a different type is assigned
// it will not break the app instead it only give errors on console
// mainly, it will only help with debugging
Person.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string),
}
// its better to add use TypeScript instead of PropTypes