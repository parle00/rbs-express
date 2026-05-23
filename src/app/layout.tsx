import type { Metadata } from "next";
import MainLayout from "@/components/Layout/MainLayout";
import { criticalStyles } from "./critical-styles";

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
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
      </head>
      <body className="antialiased">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
