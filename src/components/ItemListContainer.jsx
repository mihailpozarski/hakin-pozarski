import { useEffect , useState } from 'react';
import { useParams } from 'react-router';
import { Spin } from 'antd';
import ItemList from './ItemList';
import { getFirestore } from '../services/getFirestore';

const ItemListContainer = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const db = getFirestore();
        const dbQuery = id ? db.collection('items').where('categoryId', '==', parseInt(id)) : db.collection('items');

        dbQuery.get().then(snapshot => {
            const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(products);
            setLoading(false);
        });
    }, [id]);

    return (
        <Spin spinning={loading} size="middle" tip="loading...">
            <ItemList items={products} />
        </Spin>
    );
};

export default ItemListContainer;