"use client";
import Navbar from "@/components/Navbar";
import ProductContainer from "@/components/ProductContainer";
import { Container } from "@mui/material";
import { SlugProvider } from "../../context/SlugContext";


export default function Page({ params }: { params: { slug: string } }) {
    return (
        <SlugProvider slug={params.slug}>
            <Container>
                <Navbar />
                <ProductContainer />
            </Container>
        </SlugProvider>
    );
}
