import { z } from "zod";

export const GithubUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  avatar_url: z.string(),
  url: z.string(),
  name: z.string(),
  public_repos: z.number(),
  followers: z.number(),
  following: z.number(),
});

export type GithubUserType = z.infer<typeof GithubUserSchema>;
