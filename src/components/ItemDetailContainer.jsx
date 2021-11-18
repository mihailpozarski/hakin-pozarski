import { useEffect , useState } from 'react';
import { Spin } from 'antd';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import { getFirestore } from '../services/getFirestore';

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = db.collection('items').doc(id);
        dbQuery.get().then(doc => {
            if (doc.exists) {
                setProduct({ id: id, ...doc.data()});
                setLoading(false);
            } else {
                setLoading(false);
                alert('No such document!');
            }
        });
    }, [id]);

    return (
        <Spin spinning={loading} size="middle" tip="loading...">
            <ItemDetail item={product} />
        </Spin>
    );
};

export default ItemDetailContainer;

