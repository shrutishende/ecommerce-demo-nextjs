"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSlug } from "@/app/context/SlugContext";
import { useProduct } from "@/app/context/ProductContext";

export default function TextDisplay() {
    const productDetails = useProduct();

    return (
        <Box sx={{ marginLeft: "2rem", width: "40rem" }}>
            <Typography
                sx={{
                    textTransform: "uppercase",
                    color: "#EC4899",
                    fontWeight: 800,
                }}
            >
                Shruti&apos;s Closet
            </Typography>
            <Typography
                sx={{
                    fontSize: "2.4rem",
                    fontWeight: 700,
                    margin: "2rem auto",
                }}
            >
                {productDetails?.title}
            </Typography>
            <Typography>{productDetails?.description}</Typography>
            <Typography
                sx={{
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    margin: "1rem auto",
                }}
            >
                ${productDetails?.price}
            </Typography>
        </Box>
    );
}
