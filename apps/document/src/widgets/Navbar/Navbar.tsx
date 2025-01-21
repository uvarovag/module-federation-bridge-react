import { Link } from 'react-router'

export const Navbar = () => (
    <ul>
        <li>
            <a href="/user">out nav to user app</a>
        </li>
        <li>
            <Link to="/">main</Link>
        </li>
    </ul>
)
