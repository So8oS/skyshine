import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  return [
    {
      url: "https://www.skyshine.ae",
      lastModified: currentDate,
    },
  ];
}
