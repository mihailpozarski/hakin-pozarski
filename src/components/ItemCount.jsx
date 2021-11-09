import { useState } from 'react';
import { Button, Space } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const ItemCount = ({ initialStock = 0, initialCount = 1, onAdd }) => {
    const [count, setCount] = useState(initialCount);
    const [stock, setStock] = useState(initialStock);

    const handleIncrement = () => {
        if(count < stock) setCount(count + 1);
    }

    const handleDecrement = () => {
        if(count > 0) setCount(count - 1);
    }

    return (
        <Space size='middle'>
            <Button type="primary" onClick={handleDecrement}>
                <MinusOutlined />
            </Button>
            <span>{count}</span>
            <Button type="primary" onClick={handleIncrement}>
                <PlusOutlined />
            </Button>
            <Button key='cart' type="primary" onClick={() => onAdd(count)}>
                Add to cart
            </Button>
        </Space>
    );
}

export default ItemCount;
