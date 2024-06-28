/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fakestoreapi.com",
                port: "", // Usually empty
                pathname: "/img/**", // Allow images in the /img/ directory
            },
        ],
    },
};

export default nextConfig;
