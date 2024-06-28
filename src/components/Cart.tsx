"use client";
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { useAppSelector } from "../../lib/hooks";
import {
    calculateTotalPrice,
    decreaseCount,
    increaseCount,
    removeFromCart,
} from "../../lib/features/cartSlice";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Cart() {
    const cartItems = useAppSelector((state: RootState) => state.cart.items);
    const totalPrice = useAppSelector(
        (state: RootState) => state.cart.totalPrice
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotalPrice());
    }, [cartItems, dispatch]);
    return (
        <Box
            sx={{
                zIndex: 5,
                position: "absolute",
                right: 50,
                top: 100,
                backgroundColor: "#FFF",
                boxShadow: "0px 5px 10px lightgrey",
                borderRadius: "0.5rem",
                padding: "2rem ",
            }}
        >
            <Typography sx={{ margin: "1rem auto" }}>Cart</Typography>
            <Divider />

            {cartItems.length === 0 ? (
                <Typography>Your Cart is empty</Typography>
            ) : (
                <>
                    <Box sx={{ margin: "1rem auto" }}>
                        {cartItems.map((item) => (
                            <>
                                <Image
                                    src={item.image ?? ""}
                                    alt="kf "
                                    height={50}
                                    width={50}
                                    style={{
                                        borderRadius: "1rem",
                                        marginRight: "1rem",
                                    }}
                                />

                                <Box sx={{ marginRight: "1rem" }}>
                                    <Typography>{item.title}</Typography>
                                    <Typography>
                                        ${item.price} ⤬ {item.quantity}
                                        <span style={{ fontWeight: 800 }}>
                                            = $ {item.quantity * item.price}
                                        </span>
                                    </Typography>

                                    <Box>
                                        <Button
                                            onClick={() =>
                                                dispatch(increaseCount(item.id))
                                            }
                                        >
                                            <KeyboardArrowUpIcon />
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                dispatch(decreaseCount(item.id))
                                            }
                                        >
                                            <KeyboardArrowDown />
                                        </Button>
                                    </Box>

                                    <Button
                                        onClick={() =>
                                            dispatch(removeFromCart(item))
                                        }
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </Box>
                            </>
                        ))}
                        total price :{totalPrice.toFixed(2)}
                    </Box>

                    <Button
                        sx={{
                            backgroundColor: "#ec4899",
                            "&:hover": {
                                background: "#F471b5",
                            },
                            color: "white",
                            padding: "1rem 2rem",
                            fontWeight: 800,
                            width: "100%",
                        }}
                    >
                        Checkout
                    </Button>
                </>
            )}
        </Box>
    );
}
