import { Card, Button } from 'antd';

const ItemDetail = ({ item }) => {
    return (
        <Card
            title={item.title}
            cover={
                <img
                    alt={item.title}
                    src={item.pictureUrl}
                />
            }
            actions={[<Button type="primary">Details</Button>]}
        >
            <Card.Meta
                title={item.title}
                description={`price: ${item.price}`}
            />
        </Card>
    );
};

export default ItemDetail;