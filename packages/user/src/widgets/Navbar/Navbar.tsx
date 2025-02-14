import { Link } from 'react-router'

export const Navbar = () => (
    <ul>
        <li>
            <a href="/document">navigate external to remote document</a>
        </li>
        <li>
            <Link to="/">main</Link>
        </li>
    </ul>
)
