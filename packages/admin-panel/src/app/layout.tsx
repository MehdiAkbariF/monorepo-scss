// packages/admin-panel/src/app/layout.tsx

import type { ReactNode } from "react";
import "@my-ds/design-system/src/main.scss";

export const metadata = {
  title: "Admin Panel",
  description: "My standard admin panel project",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
