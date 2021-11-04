import { Typography, Row, Image, Col } from 'antd';
const { Title } = Typography;

const ItemDetail = ({ item }) => {
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
                    </Col>
                </Row>
            </Row>
        );
    }
};

export default ItemDetail;