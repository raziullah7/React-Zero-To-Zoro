import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
    const {username} = useContext(AppContext);

    // useQuery hook takes 2 arguments i.e., an array and a url-fetching function
    // array: contains a unique id for the query
    // function: fetches the data from the api
    // {data} represents the data returned by the api, hence it eliminates
    // the need for managing an extra useState variable
    // "data: name" substitutes the "data" keyword for a user-defined name
    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], 
    () => Axios.get("https://catfact.ninja/fact").then(response => response.data));

    if(isError) {
        return <h1>Sorry, there was an error );</h1>
    }

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div style={{fontSize: 24, fontWeight: 500}}>
            <p>This is the Home Page</p>
            <p>User : <strong>{username}</strong></p>
            <p style={{paddingLeft: 200, paddingRight: 200}}>{catData?.fact}</p>
            <button style={{fontSize: 24}} onClick={refetch}>Next Fact</button>
        </div>  
    );
}