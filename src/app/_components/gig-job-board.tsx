import { GigList } from "./gig-board-ui";
import { trpc } from "~/utils/trpc";

export function GigJobBoard() {
  const publicGigsQuery = trpc.gig.getGigs.useQuery({ take: 10 });
  const latestGigs = publicGigsQuery.data ?? [];
  return <GigList gigs={latestGigs} />;
}

export function PartialGigJobBoard() {
  const publicGigsQuery = trpc.gig.getGigs.useQuery({ take: 4 });
  const npiQuery = trpc.public_api.getNPIInformation.useQuery({
    npiNumber: 1528353059,
  });

  const npiData = npiQuery.data?.results[0];
  console.log(npiData);

  const latestGigs = publicGigsQuery.data ?? [];
  return <GigList gigs={latestGigs} isPartial={true} />;
}
