"use client";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import { Container } from "@mui/material";

export default function Home() {
    return (
        <Container>
            <Navbar />
            <Carousel />
            <Products />
        </Container>
    );
}
