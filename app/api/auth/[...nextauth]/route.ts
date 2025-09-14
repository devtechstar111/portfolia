import NextAuth from "next-auth";
import { authOptions } from "@/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// TODO: Uncomment this line to use the Edge runtime.
// export const runtime = "edge"
