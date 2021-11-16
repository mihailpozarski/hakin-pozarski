import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cartItemsTotalCount } = useContext(CartContext);

    if (cartItemsTotalCount() === 0) return null;
    
    return (
        <Link to="/cart">
            <Button size="large" type="secondary">
                <ShoppingCartOutlined />
                <span>{ cartItemsTotalCount() }</span>
            </Button>
        </Link>
    );
}

export default CartWidget;