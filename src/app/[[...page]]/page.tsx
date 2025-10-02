"use client";

import AxessPage from "@/components/AxessPage";
import { BuilderComponent, builder } from "@builder.io/react";

// Initialize with your public key (set in .env.local and Vercel)
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Page({
  params,
  searchParams,
}: {
  params: { page?: string[] };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const urlPath = "/" + (params.page?.join("/") || "");
  const normalizedPath =
    urlPath.endsWith("/") && urlPath !== "/" ? urlPath.slice(0, -1) : urlPath;

  const content = await builder
    .get("page", {
      userAttributes: { urlPath: normalizedPath },
      options: { cachebust: true },
    })
    .toPromise();

  if (!content) {
    // Fallback to your Axess design when no Builder page exists for this route
    return <AxessPage />;
  }

  return <BuilderComponent model="page" content={content} />;
}
