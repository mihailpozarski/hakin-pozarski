import { useEffect , useState } from 'react';
import { Spin } from 'antd';
import { getProducts } from '../services/productService';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts.then(products_values => {
            setProducts(products_values);
            setLoading(false);
        });
    }, []);

    return (
            <Spin spinning={loading} size="middle" tip="loading...">
                <ItemList items={products} />
            </Spin>
    );
};

export default ItemListContainer;