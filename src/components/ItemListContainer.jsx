import { useEffect , useState } from 'react';
import { useParams } from 'react-router';
import { Spin } from 'antd';
import { getProducts, getProductsByCategory } from '../services/productService';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (id) {
            getProductsByCategory(id).then(products_values => {
            setProducts(products_values);
            setLoading(false);
        });
        } else {
            getProducts().then(products_values => {
                setProducts(products_values);
                setLoading(false);
            });
        }
    }, [id]);

    return (
        <Spin spinning={loading} size="middle" tip="loading...">
            <ItemList items={products} />
        </Spin>
    );
};

export default ItemListContainer;