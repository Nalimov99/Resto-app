import React from 'react';
import './menu-item.scss'
export default class MenuItem extends React.Component {
    render() {
        const {onAddToCart} = this.props
        const {title, url, category, price} = this.props.menuItem;
        return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}/>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__button" onClick={() => onAddToCart()}>Add to cart</button>
            </li>
        )
    }
}