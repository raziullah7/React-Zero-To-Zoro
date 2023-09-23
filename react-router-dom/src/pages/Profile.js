import { useContext } from 'react';
import {ChangeProfile} from '../components/ChangeProfile';
import { AppContext } from '../App';

export const Profile = () => {
    const { username } = useContext(AppContext);

    return (
        <div style={{fontSize: 24, fontWeight: 500}}>
            <p>PROFILE</p>
            <p>User : {username}</p>
            <ChangeProfile />
        </div> 
    );
}