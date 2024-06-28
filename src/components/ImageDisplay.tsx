"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useProduct } from "@/app/context/ProductContext";



export default function ImageDisplay() {
    const productDetails = useProduct();

    return (
        <Box>
            {productDetails ? (
                <>
                    <Image
                        src={productDetails.image ?? ""}
                        width={450}
                        height={400}
                        alt="snekers"
                        style={{ borderRadius: "1rem", width: "21rem" }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "2rem",
                            // width:"10rem"
                        }}
                    >
                        <Image
                            src={productDetails.image ?? ""}
                            alt="snekers"
                            height={75}
                            width={75}
                            style={{ borderRadius: "1rem", width: "4rem" }}
                        />
                        <Image
                            src={productDetails.image ?? ""}
                            alt="snekers"
                            height={75}
                            width={75}
                            style={{ borderRadius: "1rem", width: "4rem" }}
                        />
                        <Image
                            src={productDetails.image ?? ""}
                            alt="snekers"
                            height={75}
                            width={75}
                            style={{ borderRadius: "1rem", width: "4rem" }}
                        />
                        <Image
                            src={productDetails.image ?? ""}
                            alt="snekers"
                            height={75}
                            width={75}
                            style={{ borderRadius: "1rem", width: "4rem" }}
                        />
                    </Box>
                </>
            ) : (
                <div>Loading</div>
            )}
        </Box>
    );
}
