"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import type { SbReactComponentsMap } from "@storyblok/react";
import Page from "./page.component";
import Feature from "./Feature/Feature";
import ThreeQuarterLayout from "./ThreeQuarterLayout/ThreeQuarterLayout";
import Grid from "./Grid";
import "../app/globals.css";
import Teaser from "./Teaser";
import ProductenComponent from "./Homecomponent";
import Hero from "./hero";
import Sectie from "./Sectie";

const components = {
  page: Page,
  feature: Feature,
  threequarterlayout: ThreeQuarterLayout,
  grid: Grid,
  teaser: Teaser,
  producten: ProductenComponent,
  hero: Hero,
  sectie: Sectie,
};

storyblokInit({
  accessToken: "Qwz006v8zvdDr6ue2K3kXgtt",
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

console.log("Qwz006v8zvdDr6ue2K3kXgtt");
