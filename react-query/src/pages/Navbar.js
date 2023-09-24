import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div style={{fontWeight: 600}}> 
          {/** making links to routed pages */}
          <Link style={{padding: 12}} to="/"> HOME </Link>
          <Link style={{padding: 12}} to="/profile"> PROFILE </Link>
          <Link style={{padding: 12}} to="/contact"> CONTACT </Link>
        </div>
    );
}