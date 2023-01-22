import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { countCartItems } = props;

    const [nav, setnav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='/home' style={{ fontSize: '25px', textDecoration: 'none', color: '#3d2514' }}>FOODDD</Link>
            <ul className='menu'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/cart'>Cart {' '}<span>
                    {countCartItems ? ({ countCartItems }) : "0"}</span>
                </Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
