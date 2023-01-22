import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cartbox from '../../Components/Cartbox';

export default function Cart(props) {
    const { countCartItems, onEmptyCart, onRemove, onAdd, cartItems } = props;
    var total = 0;
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

        <div>

            <nav className={nav ? "nav active" : "nav"}>
                <Link to='/home' style={{ fontSize: '25px', textDecoration: 'none', color: '#3d2514' }}>FOODDD</Link>
                <ul className='menu'>
                    <li><Link to='/home' smooth={true} duration='2000'>Home</Link></li>
                    <li><Link to='/cart' smooth={true} duration='2000'>Cart {' '}
                        {countCartItems ? (<span>{countCartItems}</span>) : "0"}
                    </Link></li>
                </ul>
            </nav>

            <div>
                {cartItems.length === 0 && <div style={{ position: 'relative', top: '20vh', fontSize: '40px' }}><center><h3>The cart is empty</h3></center></div>}
            </div>

            <div className="CartItems">
                {cartItems.map((item) => (
                    <Cartbox item={item} onAdd={onAdd} onRemove={onRemove} />
                ))}
                {cartItems.length !== 0 && <div><center><h2>Bill : </h2></center></div>}
                {cartItems.length !== 0 && <div style={{ borderBottom: '1px solid #3d2514', fontSize: '40px', textAlign: 'center', position: 'relative', top: '9vh', left: '62vh', width: '700px' }}>Item&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Quantity&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Price&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Total-Price</div>}
                {cartItems.map((item) => (
                    <div className="bill">
                        {item.name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{item.qty}&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{item.price.toFixed(2)}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  Rs.{(item.qty) * (item.price)}
                        <div style={{ display: "none" }}>
                            {"=>Total="}{total = total + (item.qty) * (item.price)}
                        </div>
                    </div>
                ))}
                {cartItems.length !== 0 && <div className="total"><center>{"Grand Total"} = {total}</center>
                    <center><Link to="/confirmed" className="header-btn">Buy Now</Link><br /></center></div>}
            </div>
            <div className="emptycart">
                {cartItems.length !== 0 && <button className="header-btn" id="emptycart" onClick={onEmptyCart}>Empty Cart items</button>}
                {cartItems.length === 0 && <Link to="/home"><button className="header-btn" id="emptycart">Order!</button></Link>}
            </div>
        </div >
    );
}
