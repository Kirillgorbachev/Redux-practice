import { Link } from "react-router-dom";

function Header () {

    return (
        <nav>
             <ul>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>
        </nav>
    )
}

export default Header;