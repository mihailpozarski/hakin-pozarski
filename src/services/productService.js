const products = [
    {   id: 1,
        title: 'Product 1',
        pictureUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: 'category 1',
        category_id: 1,
        price: 10
    },
    {   id: 2,
        title: 'Product 2',
        pictureUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: 'category 1',
        category_id: 1,
        price: 15
    },
    {   id: 3,
        title: 'Product 3',
        pictureUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: 'category 2',
        category_id: 2,
        price: 20
    },
    {   id: 4,
        title: 'Product 4',
        pictureUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: 'category 2',
        category_id: 2,
        price: 25
    },
    {   id: 5,
        title: 'Product 5',
        pictureUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: 'category 2',
        category_id: 2,
        price: 30
    }
];

export function getProducts() {
    return new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});
}


export function getProduct(id) { return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(product => product.id == id);
            if (product) {
                resolve(product);
            }
            else {
                reject(new Error('Product not found'));
            }
        }, 2000);
    });
}

export function getProductsByCategory(id) { return new Promise((resolve, reject) => {
    setTimeout(() => {
        const filteredProducts = products.filter(product => product.category_id == id);
        if (filteredProducts) {
            resolve(filteredProducts);
        }
        else {
            reject(new Error('Products not found'));
        }
    }, 2000);
});
}
