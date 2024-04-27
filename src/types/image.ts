import { z } from "zod";

export const ImageSchema = z.array(
  z.object({
    id: z.string(),
    url: z.string(),
    download_url: z.string(),
  })
);

export type ImageDataType = z.infer<typeof ImageSchema>;
