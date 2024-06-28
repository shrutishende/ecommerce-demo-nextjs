import { createContext, useContext } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    description?: string;
    image?: string;
    quantity:number
}
//export const ProductContext = createContext<{} | undefined>({});
export const ProductContext = createContext<Product | undefined>(undefined);

export function useProduct() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}

export function ProductProvider({
    children,
    product,
}: {
    children: React.ReactNode;
    // product?: {};
    product:Product
}) {
    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    );
}
