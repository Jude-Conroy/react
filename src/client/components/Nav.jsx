import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul className="navbar">
                <li> |   </li>
                <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                <li> |   </li>
                <li className="nav-item"><Link className="nav-link" to="/trading">Trading</Link></li>
                <li> |   </li>
                <li className="nav-item"><Link className="nav-link" to="/alerts">Alerts</Link></li>
                <li> |   </li>
                <li className="nav-item"><Link className="nav-link" to="/reports">Reports</Link></li>
                <li> |   </li>
                <li className="nav-item"><Link className="nav-link" to="/status">Status</Link></li>
                <li> |   </li>
            </ul>
        </nav>
    );
}

export default NavBar;