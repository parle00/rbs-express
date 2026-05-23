"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: GlobalErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="tr">
      <body>
        <main
          style={{
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f5f5f5",
            padding: "24px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              background: "#ffffff",
              borderRadius: "16px",
              padding: "32px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h1
              style={{
                margin: "0 0 12px",
                fontSize: "28px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Beklenmeyen bir hata oluştu
            </h1>

            <p
              style={{
                margin: "0 0 24px",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#6b7280",
              }}
            >
              Sayfa yüklenirken bir sorun oluştu. Lütfen tekrar deneyin.
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                border: "none",
                borderRadius: "10px",
                background: "#111827",
                color: "#ffffff",
                padding: "12px 20px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Tekrar dene
            </button>
          </div>
        </main>
      </body>
    </html>
  );
};

export default Error;
