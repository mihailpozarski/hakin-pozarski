import Item from './Item';
import { Row, Col } from 'antd';

const ItemList = ({ items }) => {
    return (
        <Row gutter={[24,24]}>
            {items.map(item => (
                <Col span={8} key={item.id}>
                    <Item item={item} />
                </Col>
            ))}
        </Row>
    );  
}

export default ItemList;

