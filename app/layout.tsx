import LayoutWrapper from "@/components/LayoutWrapper";
import "../css/tailwind.css";
import { AppProviders } from "@/components/AppProviders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lim Wei Jin",
  description: "Lim Wei Jin's portfolio site",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://limweijin.dev",
    siteName: "Lim Wei Jin",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
