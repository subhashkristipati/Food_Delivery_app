import React from 'react'
import { Link } from 'react-router-dom'

export default function Confirmed(props) {
    const { onEmptyCart } = props;
    return (
        <>
            <div className='confirmed'>
                your order is confirmed........!
            </div>
            <div className='confirmed2'>
                Go to home page..
                <Link to='/home' style={{ cursor: 'pointer' }}><button className="header-btn" onClick={onEmptyCart}>order!</button></Link>
            </div>
        </>
    )
}
