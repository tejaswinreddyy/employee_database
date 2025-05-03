import React from 'react';
import '../Style.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='main_container'>
            
            <div className='container'>

                <ul>

                    <li>
                        <Link to='/add' className="nav-link"> Add Employee</Link>
                    </li>

                    <li>
                        <Link to='emplist' className="nav-link"> Employee List</Link>
                    </li>

                </ul>

            </div>

        </nav>
    );
}

export default Navbar;
