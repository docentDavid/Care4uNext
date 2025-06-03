import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
import Navigation from "../components/header/Navigation";
import Footer from "../components/Footer/Footer";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <StoryblokProvider>
      <html lang="nl">
        <body>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
