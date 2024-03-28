import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const gigRouter = createTRPCRouter({
  getPublicGigs: publicProcedure.query(({ ctx }) => {
    // Only return 5 gigs
    return ctx.db.gig.findMany({
      include: {
        location: true, // Include location data
      },
      orderBy: { createdAt: "desc" },
      take: 5,
    });
  }),

  getMyGigs: protectedProcedure.query(({ ctx }) => {
    // Fetch gigs related to the logged-in user
    return ctx.db.gig.findMany({
      where: {
        users: {
          some: {
            id: ctx.session.user.id,
          },
        },
      },
      include: {
        location: true, // Include location data
      },
      orderBy: { createdAt: "desc" },
    });
  }),

  saveGig: protectedProcedure
    .input(z.object({ gigId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      // Save a gig for the logged-in user
      return ctx.db.savedGig.create({
        data: {
          gigId: input.gigId,
          userId: ctx.session.user.id,
        },
      });
    }),

  unsaveGig: protectedProcedure
    .input(z.object({ gigId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      // Remove a saved gig for the logged-in user
      return ctx.db.savedGig.deleteMany({
        where: {
          gigId: input.gigId,
          userId: ctx.session.user.id,
        },
      });
    }),
});
