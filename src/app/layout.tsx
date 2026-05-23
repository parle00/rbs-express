import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/Layout/MainLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://rbsexpress.netlify.app"),
  title: "RbsExpress",
  description:
    "RbsExpress ile en çok okunan içerikleri hızlı şekilde okuyabilir ve sadece ilginizi çeken kategorilerdeki haberleri görüp  ana sayfanızı ilgi alanlarınıza göre özelleştirebilirsiniz.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr-TR">
      <body className="antialiased">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
