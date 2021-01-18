import React from 'react';
import MenuItem from '../menu-item/menu-item';
import WithRestoService from '../hoc/with-resto-service'
import {connect} from 'react-redux';
import {menuLoaded, menuRequsted, menuError, addToCart} from '../../actions/actions'
import Spinner from '../spinner/spinner'
import Error from '../error/error'

import './menu-list.scss'

class MenuList extends React.Component {
    componentDidMount() {
        this.props.menuRequsted();
        this.props.RestoService.getMenuItems()
            .then(res => {
                this.props.menuLoaded(res)
            })
            .catch(e => this.props.menuError(e.message))
    }
    
    render() {
        const {menuItems, isLoading, hasError} = this.props;
        if(isLoading) {
            return <Spinner/>
        }
        if(hasError) {
            return <Error errorMessage={this.props.errorMessage}/>
        }

        const items = menuItems.map(item => {
            return (
                <MenuItem 
                    key={item.id} 
                    menuItem={item}
                    onAddToCart={() => this.props.addToCart(item.id)}
                />
            ) 
        })
        
        return (
            <ul className="menu__list">
                {items}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        isLoading: state.isLoading,
        hasError: state.hasError,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequsted,
    menuError,
    addToCart
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList))
