import React from 'react';
import './HomePage.scss';
import allProducts from './AllProducts';
import ProductElement from './ProductElement';
import { nanoid } from 'nanoid';

function HomePage() {
    const showProducts = allProducts.map(product => {
        const { id, image, title, desc, time, price } = product;

        return (
            <ProductElement
                key={nanoid(4)}
                id={id}
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
export default HomePage;
