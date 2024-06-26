import { GigList } from "./gig-board-ui";
import { trpc } from "~/utils/trpc";

export function GigJobBoard() {
  const publicGigsQuery = trpc.gig.getGigs.useQuery({ take: 6 });
  const latestGigs = publicGigsQuery.data ?? [];
  return <GigList gigs={latestGigs} />;
}

export function PartialGigJobBoard() {
  const publicGigsQuery = trpc.gig.getGigs.useQuery({ take: 8 });

  const latestGigs = publicGigsQuery.data ?? [];
  return <GigList gigs={latestGigs} isPartial={true} />;
}
