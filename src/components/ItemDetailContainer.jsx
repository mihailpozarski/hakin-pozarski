import { useEffect , useState } from 'react';
import { Spin } from 'antd';
import { useParams } from 'react-router';
import { getProduct } from '../services/productService';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProduct(id).then(product_value => {
            setProduct(product_value);
            setLoading(false);
        }, _error => {
            alert(_error);
            setLoading(false);
        });
    }, [id]);

    return (
        <Spin spinning={loading} size="middle" tip="loading...">
            <ItemDetail item={product} />
        </Spin>
    );
};

export default ItemDetailContainer;

