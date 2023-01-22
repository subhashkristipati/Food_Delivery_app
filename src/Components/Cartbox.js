import React from 'react'

function Cartbox(props) {
    const { item, onAdd, onRemove } = props;

    return (
        <div>
            <center>
                <div className="cartbox" id="cartbox">
                    <div className="cartboximg">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="a-b-text" id='carttext'>
                        <h3>{item.name}</h3>
                        <div className="price"> Rs {item.price}/- <span> Rs {item.mrp}/- </span> </div>
                        <div className="Buttons">
                            QTY :
                            <button className="remove" onClick={() => onRemove(item)}>-</button>
                            {item.qty}
                            <button className="add" onClick={(e) => onAdd(e, item)}>+</button>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Cartbox
