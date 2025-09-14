import GuestbookEntry from "./GuestbookEntry";
import { getGuestbookEntries } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { AddEntryForm } from "./AddEntryForm";

export default async function Guestbook() {
  const entries = await getGuestbookEntries();
  const session = await getServerSession(authOptions);

  return (
    <div className="mt-4 space-y-8">
      <h2 className="mt-4 text-2xl font-bold leading-8 tracking-tight">Guestbook</h2>
      {Boolean(session?.user) && <AddEntryForm />}
      {entries?.map((entry) => (
        <GuestbookEntry key={entry.id} entry={entry} currentUserId={session?.id as string} />
      ))}
    </div>
  );
}
