
import withMDX from "@next/mdx";
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

withMDX({
  extension: /\.mdx?$/,
  // Vous pouvez ajouter des options spécifiques à MDX ici si besoin.
  ...nextConfig,
});

export default nextConfig;