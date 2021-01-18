import React from 'react';
import {connect} from 'react-redux'
import {removeFromCart} from '../../actions/actions'
import './cart.scss';

const Cart = ({cart, removeFromCart}) => {
    const items = cart.map(item => {
        const {title, id, url, price, qty} = item
        return (
            <div className="cart__item" key={id}>
                <img src={url} className="cart__item-img" alt={title}/>
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">{price*qty}$</div>
                <div className="cart__close" onClick={() => removeFromCart(id)}>&times;</div>
                <div className="cart__qty">{qty}</div>
            </div>
        )
    })
    return (
        <View items={items}/>
    );
};

const View = ({items}) => {
    if(items.length >= 1) {
        return (
            <>
                <div className="cart__title">Ваш заказ:</div>
                <div className="cart__list">
                    {items}
                </div>
            </>
        )
    }
    else {
        return (
            <div className="cart__title">Ваша корзина пуста</div>
        )
    }
}

const mapStateToProps = ({cart}) => {
    return {
      cart 
    }
    
}

const mapDispatchToProps = {
    removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);