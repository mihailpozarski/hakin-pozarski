import Item from './Item';
import { Row, Col } from 'antd';

const ItemList = ({ items }) => (
    <Row gutter={[16, 16]}>
        {items.map(item => (
            <Col span={8} key={item.id}>
                <Item key={item.id} item={item} /> 
            </Col>
        ))}
    </Row>
);

export default ItemList;

