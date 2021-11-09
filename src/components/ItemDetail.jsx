import { Typography, Row, Image, Col, Button } from 'antd';
import { Link } from "react-router-dom";
import { useState } from 'react';
import ItemCount from './ItemCount';
const { Title } = Typography;

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);

    const onAdd = (value) => {
        setCount(value);
    }

    if (!item) {
        return <div>No Item...</div>;
    }
    else {
        return (
            <Row>
                <Title>{item.title}</Title>
                <Row justify="center" gutter={[24]}>
                    <Col span={12}>
                    <Image src={item.pictureUrl} alt={item.title} />
                    </Col>
                    <Col span={12}>
                    <Title level={4}>${item.price}</Title>
                    <p>{item.description}</p>
                    { count > 0 ?
                     <Button type='primary'><Link to="/cart">Terminar Compra</Link></Button> 
                     : 
                     <ItemCount item={item} initialStock={5} onAdd={onAdd}  />
                    }
                    </Col>
                </Row>
            </Row>
        );
    }
};

export default ItemDetail;