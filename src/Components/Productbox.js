import React from 'react';
import { Link } from 'react-router-dom';

export default function Productbox(props) {
    return (
        <div className="a-box">
            <div className="a-b-i">
                <img src={props.image} style={{ height: '171px', width: '300px' }} alt='' />
            </div>
            <div className="a-b-text">
                <h2>{props.title}</h2>
                <Link to={props.link}><button className='productbox-button'>ORDER NOW</button></Link>
            </div>
        </div>
    )
}
