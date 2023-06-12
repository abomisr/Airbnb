import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "joinedAt" | "updatedAt" | "emailVerified"
> & {
  joinedAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
