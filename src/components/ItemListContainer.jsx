import { Row, Col } from 'antd';

import ItemCount from "./ItemCount";


const ItemListContainer = ({ greetings }) => {
    return (
        <Row gutter={16}>
            <Col span={6}>
                <ItemCount initialStock={5} initialCount={1}/>
            </Col>
        </Row>
    );
};

export default ItemListContainer;