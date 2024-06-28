"use client";
import { createContext, useContext } from "react";

export const SlugContext = createContext<string | undefined>(undefined);
export function useSlug() {
    const context = useContext(SlugContext);
    if (context === undefined) {
        throw new Error("useSlug must be used within a SlugProvider");
    }
    return context;
}

export function SlugProvider({
    children,
    slug,
}: {
    children: React.ReactNode;
    slug?: string;
}) {
    return <SlugContext.Provider value={slug}>{children}</SlugContext.Provider>;
}
