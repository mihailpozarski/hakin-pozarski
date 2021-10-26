import { useState } from 'react';
import { Card, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const ItemCount = ({ initialStock = 0, initialCount = 1 }) => {
    const [count, setCount] = useState(initialCount);
    const [stock, setStock] = useState(initialStock);

    const handleIncrement = () => {
        if(count < stock) setCount(count + 1);
    }

    const handleDecrement = () => {
        if(count > 0) setCount(count - 1);
    }

    return (
        <Card
            title="Item Count"
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <Button type="link" onClick={handleIncrement}><PlusOutlined /></Button>,
                <span>{count}</span>,
                <Button type="link" onClick={handleDecrement}><MinusOutlined /></Button>
            ]}
        >
            <Card.Meta
                title="Card title"
                description="This is the description"
            />
        </Card>
    );
}

export default ItemCount;
