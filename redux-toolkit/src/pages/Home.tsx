import { useSelector } from "react-redux/es/exports";

export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username);

    return (
        <div>
            <h1>This is the Home Page</h1>
            <h1>{username}</h1>
        </div>
        
    );
}