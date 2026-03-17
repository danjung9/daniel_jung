import type { Metadata } from "next";

import { DEFAULT_OG_IMAGE } from "@/lib/constants";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  image = DEFAULT_OG_IMAGE
}: MetadataInput): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

