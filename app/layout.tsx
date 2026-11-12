import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Kokoro Bloom | Floral Boutique", description: "Statement bouquets, thoughtful gifts, and custom floral creations." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
