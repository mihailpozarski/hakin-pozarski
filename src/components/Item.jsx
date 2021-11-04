import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <Card
            title={item.title}
            cover={
                <img
                    alt={item.title}
                    src={item.pictureUrl}
                />
            }
            actions={[
            <Link to={`/item/${item.id}`}><Button type="primary">Details</Button></Link>]}
        >
            <Card.Meta
                title={item.title}
                description={`price: ${item.price}`}
            />
        </Card>
    )
};

export default Item;