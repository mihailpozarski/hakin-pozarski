import { useEffect , useState } from 'react';
import { Spin } from 'antd';
import { getProduct } from '../services/productService';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProduct.then(product_value => {
            setProduct(product_value);
            setLoading(false);
        });
    }, []);

    return (
        <Spin spinning={loading} size="middle" tip="loading...">
            <ItemDetail item={product} />
        </Spin>
    );
};

export default ItemDetailContainer;

