import { Directus } from "@directus/sdk";

export const getDirectusClient = async () => {
  const directus = new Directus("https://cms.samespace.com");
  return directus;
};
