import { Link } from '@remix-run/react';

export default function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="about">About</Link>
            </li>
            <li>
                <Link to="photography">Photography</Link>
            </li>
        </ul>
    );
}
