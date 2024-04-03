import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const gigRouter = createTRPCRouter({
  getGigs: publicProcedure
    .input(z.object({ take: z.number().positive() }))
    .query(({ ctx, input }) => {
      // Only return a specified number of gigs
      return ctx.db.gig.findMany({
        include: {
          location: true, // Include location data
        },
        take: input.take,
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
