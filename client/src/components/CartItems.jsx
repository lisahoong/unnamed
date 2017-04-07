import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const CartItems = function(props) {
  return (<div className="cart-100">
    <w>{props.userName}&#39;s Cart</w>
    {props.userItems.map(function(item, i) {
      return ( <div key={i} className="cart-useritems-container">
          <div className="cart-userimage-desc-containter">
      <div><img className="cart-userimage" href={item.link} src={item.src}/></div>
      <div><a className="cart-userinfo" href={item.link}>{item.title}</a>
      <button className="remove-button" id="remove" onClick={props.remove}>REMOVE</button>
      </div>
      </div>
      <p className="cart-userprice">{item.price}</p>

    </div>)
  })}
    <line/>
    Subtotal: ${props.userTotal}<br/>
  <div className="pay-button"><Link to="/checkout">Pay share</Link></div>
</div>
)
}

export default CartItems;
