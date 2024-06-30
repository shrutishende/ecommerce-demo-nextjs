"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";
import { RootState } from "../../lib/store";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useAppSelector } from "../../lib/hooks";
import { useDispatch } from "react-redux";
import { initializeCart } from "../../lib/features/cartSlice";

export default function Navbar() {
    const [viewCart, setViewCart] = useState(false);
    
    const count = useAppSelector((state: RootState) => state.cart.items);

    let totalQuantity = 0;
    count.forEach((item) => {
        totalQuantity += item.quantity;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeCart());
    }, [dispatch]);
   

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "2rem",
                alignItems: "center",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <div className="font-serif text-2xl md:text-2xl lg:text-3xl font-bold tracking-tight text-pink-500 p-2">
                    Shruti&apos;s Closet
                </div>
                <Typography sx={{ marginRight: "1rem", marginLeft: "2rem" }}>
                    Collections
                </Typography>
                <Typography sx={{ marginRight: "1rem" }}>Men</Typography>
                <Typography sx={{ marginRight: "1rem" }}>Women</Typography>
                <Typography sx={{ marginRight: "1rem" }}>About</Typography>
                <Typography>Contact</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <div>
                    <form
                        className="relative items-center justify-center
            "
                    >
                        <input
                            type="text"
                            placeholder="Search for products, brands and more..."
                            className="text-xs px-2 py-2 w-[270px] border border-gray-300 rounded-l-md focus:outline-none  focus:border-blue-500 h-full"
                        />
                        <button className="px-2 py-[4px] bg-pink-400 text-white rounded-r-md focus:outline-none hover:bg-pink-200  h-full">
                            <SearchIcon />
                        </button>
                    </form>
                </div>
                <div className="ml-4">
                    {totalQuantity > -1 && (
                        <Badge badgeContent={totalQuantity} color="primary">
                            <Button onClick={() => setViewCart(!viewCart)}>
                                <ShoppingCartIcon className="text-pink-500" />
                            </Button>
                        </Badge>
                    )}
                </div>

                <SignedOut>
                    <Link href={"/auth/sign-in"}>
                        <Button>
                            <AccountCircleIcon className="text-pink-500" />
                        </Button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Box>
            {viewCart ? <Cart /> : null}
        </Box>
    );
}
