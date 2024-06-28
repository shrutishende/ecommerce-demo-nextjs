"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageDisplay from "./ImageDisplay";
import TextDisplay from "./TextDisplay";
import AddToCart from "./AddToCart";
import axios from "axios";
import { useSlug } from "@/app/context/SlugContext";
import { ProductProvider } from "@/app/context/ProductContext";
import { CartItems } from "../../lib/features/cartSlice";

export default function ProductContainer() {
    const [products, setProducts] = useState({} as CartItems);
    const slug = useSlug();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get(
                `https://fakestoreapi.com/products/${slug}`
            );
            setProducts(res.data);
        };
        fetchProducts();
    }, [slug]);
    return (
        <ProductProvider product={products}>
            <Box
                sx={{
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <ImageDisplay />
                <Box>
                    <TextDisplay />
                    <AddToCart />
                </Box>
            </Box>
        </ProductProvider>
    );
}
