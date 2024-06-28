"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    
}

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get("https://fakestoreapi.com/products");
            setProducts(res.data);
        };
        fetchProducts();
    }, []);

    const cardItem = (item: Product) => {
        return (
            <div
                className="card my-5 py-4"
                style={{ width: "16rem" }}
                key={item.id}
            >
                <div className="items-center justify-center">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="card-img-top p-4 h-72 w-auto items-center justify-center"
                    />
                </div>

                <div className="card-body text-center">
                    <h5 className="card-title font-medium">{item.title}</h5>
                    <p className="lead fw-bolder">${item.price}</p>
                    <div className="py-2">
                        <Link
                            href={`/products/${item.id}`}
                            className="btn btn-primary"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="container py-2">
                <div className="row">
                    <h1 className="text-center text-4xl py-5 font-bold">
                        Our Products
                    </h1>
                    <hr />
                </div>
            </div>
            <div className="container">
                <div className="row justify-around">
                    {products.map(cardItem)}
                </div>
            </div>
        </>
    );
}
