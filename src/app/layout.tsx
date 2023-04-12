"use client";

import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ReactNode } from "react";
import Layout from "@/components/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Layout>{children}</Layout>
    </Providers>
  );
}

const queryClient = new QueryClient();

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
