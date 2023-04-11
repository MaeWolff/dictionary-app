"use client";

import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/home/Header";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body>
          <Header />
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
