import { Link } from 'react-router'

export const Navbar = () => (
    <ul>
        <li>
            <a href="/document">out nav to document app</a>
        </li>
        <li>
            <Link to="../">main</Link>
        </li>
    </ul>
)
