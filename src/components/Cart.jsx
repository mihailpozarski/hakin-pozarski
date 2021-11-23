import { Link } from 'react-router-dom'
import { Card, Button, Space, Statistic, Row } from 'antd';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { getFirestore } from '../services/getFirestore';
import firebase from 'firebase';

export const Cart = () => {
    const { cartList, removeFromCart, clearCart } = useContext(CartContext);

    

    const handleRemove = (item) => {
        removeFromCart(item.id);
    }

    const generateOrder = () => {
        const order = {
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            buyer: { email: 'one@email.com', name: 'John Doe', phone: '123456789' },
            items: cartList.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            total: cartTotal(),
        }  

        const dbQuery = getFirestore();
        dbQuery.collection('orders').add(order).then((order) => {
            reduceStock(cartList);
            alert(`Compra realizada con exito, su numero de orden es: ${order.id}`);
        }).catch(err => {
            console.log('Error creating order: ', err);
        });
    }

    const reduceStock = (cartList) => {
        const itemsToUpdate = getFirestore()
                              .collection('items')
                              .where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(item => item.id))
        const batch = getFirestore().batch();

        itemsToUpdate.get().then( collection => {
            collection.docs.forEach( doc => {
                const item = doc.data();
                batch.update(doc.ref, { stock: item.stock - cartList.find(item => item.id === doc.id).quantity });
            });
            batch.commit().then(() => {
                clearCart();
            });
        }); 
    }

    const cartTotal = () => cartList.reduce((total, item) => total + item.price * item.quantity, 0);

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
                    <Button type="primary" onClick={() => { generateOrder() }}>Checkout</Button>
                    <Statistic title="Total" value={'$ ' + cartTotal() } />
                </Row>
            </div>
        )
    }
}
