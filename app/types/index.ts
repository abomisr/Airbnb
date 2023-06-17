import { Listing, Reservation, User } from "@prisma/client";

export type SafeListing = Omit<Listing, "joinedAt"> & {
  joinedAt: string;
};

export type SafeReservation = Omit<
  Reservation, 
  "joinedAt" | "startDate" | "endDate" | "listing"
> & {
  joinedAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  "joinedAt" | "updatedAt" | "emailVerified"
> & {
  joinedAt: string;
  updatedAt: string;
  emailVerified: string | null;
};