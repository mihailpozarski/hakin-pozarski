import { Link } from 'react-router-dom'
import { Card, Button, Space, Statistic, Row } from 'antd';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
    const { cartList, removeFromCart, clearCart } = useContext(CartContext);

    const handleRemove = (item) => {
        removeFromCart(item.id);
    }

    if(cartList.length === 0) {
        return (
            <div>
                <h1>Cart is empty</h1>
                <Link to="/"><Button>Back to shop</Button></Link>
            </div>
        )
    } else {        
        return (
            <div className="cart">
                <h1>Cart</h1>
                <Space direction="horizontal" size={'middle'}>
                    {cartList.map(item => (
                        <Card key={item.id}>
                            <div className="cart-item">
                                <div className="cart-item-name">
                                    <Link to={`/item/${item.id}`}>
                                        <h3>{item.name}</h3>
                                    </Link>
                                </div>
                                <div className="cart-item-price">
                                    <p>$ {item.price}</p>
                                </div>
                                <div className="cart-item-quantity">
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <div className="cart-item-remove">
                                    <Button
                                        type="danger"
                                        onClick={() => { handleRemove(item) }}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </Space>
                <Row className="cart-total" justify="space-between" align="middle">
                    <Button type="danger" onClick={() => { clearCart() }}>Clear cart</Button>
                    <Statistic title="Total" value={'$ ' + cartList.reduce((total, item) => total + item.price * item.quantity, 0)} />
                </Row>
            </div>
        )
    }
}
