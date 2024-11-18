/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: { IMGBB_API_KEY: "ab3e927fbb2142be370cd6e16ff2fdee" },
    images: {
      domains: [
        "icms-image.slatic.net",
        "i.ibb.co",
        "i.ibb.co.com",
        "cdn.shopify.com",
        "static-01.daraz.com.bd",
        "cdn.shopify.com",
        "rukminim1.flixcart.com",
        "cdn-images.farfetch-contents.com",
        "https://static-01.daraz.com.bd",
        "4.imimg.com",
        "static-01.daraz.com.bd",
        "images.prismic.io",
        "static-01.daraz.com.bd ",
        "i.etsystatic.com",
        "www.realmenrealstyle.com",
        "static-01.daraz.com.bd",
        "placeimg.com",
        "i.postimg.cc",
        "kachabazar-store.vercel.app",
        "picsum.photos",
        "api.lorem.space",
        "ibb.co",
        "example.com",
        "www.example.com"
      ],
    },
};

export default nextConfig;
