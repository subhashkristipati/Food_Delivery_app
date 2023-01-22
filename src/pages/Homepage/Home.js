import React, { useState } from 'react';
import Productbox from '../../Components/Productbox';
import { Link } from 'react-router-dom';
import pimage1 from '../../images/nonveg.jpeg';
import pimage2 from '../../images/veg.webp';
import pimage3 from '../../images/tiffins.jpg';
// import Navbar from '../../Components/Navbar';

const Home = (props) => {
    const { countCartItems, onAdd, data, isPending, error } = props

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


        <div id='main' >
            {/* <Navbar countCartItems={countCartItems} /> */}
            <nav className={nav ? "nav active" : "nav"}>
                <Link to='/home' style={{ fontSize: '25px', textDecoration: 'none', color: '#3d2514' }}>FOODDD</Link>
                <ul className='menu'>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/cart'>Cart {' '}
                        {countCartItems ? (<span>{countCartItems}</span>) : "0"}
                    </Link></li>
                </ul>
            </nav>


            <div className="header-heading" >
                <h3> FOOD DELIVERY APP </h3>
                <h1> <span>SOUTH INDIA</span> FOOD</h1>
                <div className="header-btns" >
                    <Link to='#' className="header-btn"> Order </Link>
                </div>
            </div>
            <div className="products" >
                <h1> CHOOSE & ENJOY </h1>
                <div className='a-container'>
                    <Productbox image={pimage1} title='non-veg' link='/search/non-veg-meals' />
                    <Productbox image={pimage2} title='veg' link='/search/veg-meals' />
                    <Productbox image={pimage3} title='tiffins' link='/search/tiffins' />
                </div>
            </div>

            <div className="fooditems">
                <center><h1 className="category_heading"><b>Most viewed food items : </b></h1></center>
                <div className="fooditembox-container">
                    {error && <h1>error</h1>}
                    {isPending && <h1 style={{ fontSize: "30px" }}>Loading .......</h1>}
                    {data && data.map(item => (
                        <div className="fooditembox" key={Math.random()}>
                            <div className="fooditemblock">
                                <div className="fooditemimagepart"></div>
                                <img src={item.img} alt="" />
                                <div className="fooditemdetailspart">
                                    <h3>{item.name}</h3>
                                    <div className="price"> Rs {item.price}/- <span> Rs {item.mrp}/- </span> </div>
                                    <Link to="/checkoutpage" className="buynow_btn">Buy Now</Link><br />
                                    <button className="addToCart_btn" onClick={(e) => onAdd(e, item)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Home;