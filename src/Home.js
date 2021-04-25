import React from 'react';
import './Home.scss';
import allProducts from './AllProducts';
import ProductWidget from './ProductWidget';

function Home() {
    const showProducts = allProducts.map(product => {
        const { id, image, title, desc, time, price } = product;

        return (
            <ProductWidget
                key={id}
                image={image}
                title={title}
                desc={desc}
                time={time}
                price={price}
            />
        );
    });

    return <section className='home'>{showProducts}</section>;
}
export default Home;
