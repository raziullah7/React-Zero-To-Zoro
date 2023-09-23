import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
    const {username} = useContext(AppContext);

    return (
        <div style={{fontSize: 24, fontWeight: 500}}>
            <p>This is the Home Page</p>
            <p>User : {username}</p>
        </div>  
    );
}