import React, { useState, useEffect } from "react";
import "./HomePage.scss";

import ProductElement from "./ProductElement";
import { nanoid } from "nanoid";

function HomePage({ products, category }) {
    const showProducts = products.map((product) => {
        const { id, image, title, desc, time, price } = product;

        if (!category)
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

        if (product.category === category)
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
