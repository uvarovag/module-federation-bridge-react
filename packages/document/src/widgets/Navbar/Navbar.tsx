import { Link } from 'react-router'

export const Navbar = () => (
    <ul>
        <li>
            <a href="/user">navigate external to remote user</a>
        </li>
        <li>
            <Link to="/">main</Link>
        </li>
    </ul>
)
