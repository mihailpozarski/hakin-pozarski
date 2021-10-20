import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const CartWidget = () => {
    return (
        <Button size="large" type="secondary">
            <ShoppingCartOutlined />
            <span>5</span>
        </Button>
    );
}

export default CartWidget;