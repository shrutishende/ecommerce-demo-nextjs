"use client";

import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CartItems, addToCart } from "../../lib/features/cartSlice";
import { useSlug } from "@/app/context/SlugContext";
import { useProduct } from "@/app/context/ProductContext";

export default function AddToCart() {
    const [count, setCount] = useState(0);
      const [cartItem, setCartItem] = useState({} as CartItems);
 
    const dispatch = useDispatch();

    const productDetails = useProduct();
   
    useEffect(() => {
        const fetchProduct = async () => {
       
            console.log("product details", productDetails);
            const cartItem = {
                id: productDetails.id,
                title: productDetails.title,
                price: productDetails.price,
                image: productDetails.image ,
                quantity: 0,
            };
            setCartItem(cartItem);
        };
        fetchProduct();
    }, [productDetails]);

    function decreaseHandler() {
        if (count > 0) {
            setCount(count - 1);
        }

        if (cartItem.quantity > 0) {
            cartItem.quantity--;
            setCartItem(cartItem);
            
        }
    }

    function increaseHandler() {
        if (cartItem) {
            setCartItem({ ...cartItem, quantity: cartItem.quantity + 1 });
        }

        setCount(count + 1);
    }

    return (
        <Box sx={{ marginLeft: "2rem", display: "flex" }}>
            <Box
                sx={{
                    backgroundColor: "#e5e5e5",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Button onClick={decreaseHandler}>-</Button>
                <Typography sx={{ fontWeight: 800 }}> {count}</Typography>

                <Button onClick={increaseHandler}>+</Button>
            </Box>
            <Button
                sx={{
                    backgroundColor: "#ec4899",
                    "&:hover": {
                        background: "#F471b5",
                    },
                    color: "#FFF",
                    marginLeft: "4rem",
                    padding: "1rem 2rem",
                    hover: "green",
                }}
                onClick={() => {
                    dispatch(addToCart(cartItem));
                    setCount(0);
                    setCartItem({
                        ...cartItem,
                        quantity: 0,
                    });
                }}
            >
                <ShoppingCart sx={{ marginRight: "1rem" }} /> Add to Cart
            </Button>
        </Box>
    );
}
