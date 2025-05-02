// // import NextAuth from "next-auth";
// // import type { AuthOptions } from "next-auth";
// // import Google from "next-auth/providers/google";
// // import { createGuest, getGuest } from "./data-service";
// // import type { Session, User } from "next-auth";

// // // Define interface for session with our custom properties
// // interface ExtendedSession extends Session {
// //   user: {
// //     email: string;
// //     name?: string;
// //     guestId?: string;
// //   };
// // }

// // // Define interface for the signIn callback params
// // interface SignInParams {
// //   user: User;
// //   profile?: any;
// //   account?: any;
// // }

// // // Define interface for the session callback params
// // interface SessionParams {
// //   session: ExtendedSession;
// //   user: User;
// // }

// // // Define interface for the authorized callback params
// // interface AuthorizedParams {
// //   auth: { user?: User } | null;
// //   request: Request;
// // }

// // const authConfig: AuthOptions = {
// //   providers: [
// //     Google({
// //       clientId: process.env.AUTH_GOOGLE_ID as string,
// //       clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
// //     }),
// //   ],
// //   callbacks: {
// //     authorized({ auth, request }: AuthorizedParams): boolean {
// //       return !!auth?.user;
// //     },
// //     async signIn({ user, profile, account }: SignInParams): Promise<boolean> {
// //       try {
// //         if (!user.email) return false;

// //         const existingGuest = await getGuest(user.email);

// //         if (!existingGuest)
// //           await createGuest({
// //             email: user.email,
// //             fullName: user.name || "",
// //           });

// //         return true;
// //       } catch {
// //         return false;
// //       }
// //     },
// //     async session({ session, user }: SessionParams): Promise<ExtendedSession> {
// //       const guest = await getGuest(session.user.email);
// //       session.user.guestId = guest.id;
// //       return session;
// //     },
// //   },
// //   pages: {
// //     signIn: "/login",
// //   },
// // };

// // export const {
// //   auth,
// //   signIn,
// //   signOut,
// //   handlers: { GET, POST },
// // } = NextAuth(authConfig);

// import NextAuth from "next-auth";
// import type { AuthOptions, Session, User, DefaultSession } from "next-auth";
// // import type { JWT } from "next-auth/jwt";
// import type { AdapterUser } from "next-auth/adapters";
// import Google from "next-auth/providers/google";
// import { createGuest, getGuest } from "./data-service";
// // import type { Awaitable } from "next-auth";

// // Extend the built-in session types
// declare module "next-auth" {
//   interface Session {
//     user: {
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//       guestId?: string;
//     };
//   }
// }

// // Define interface for the signIn callback params
// interface SignInParams {
//   user: User;
//   profile?: any;
//   account?: any;
// }

// // Define interface for the authorized callback params
// // interface AuthorizedParams {
// //   auth: { user?: User } | null;
// //   request: Request;
// // }

// const authConfig: AuthOptions = {
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID as string,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, profile, account }: SignInParams): Promise<boolean> {
//       try {
//         if (!user.email) return false;

//         const existingGuest = await getGuest(user.email);

//         if (!existingGuest)
//           await createGuest({
//             email: user.email,
//             fullName: user.name || "",
//           });

//         return true;
//       } catch {
//         return false;
//       }
//     },
//     async session({
//       session,
//       user,
//     }: {
//       session: Session;
//       user: AdapterUser;
//     }): Promise<Session> {
//       if (session.user?.email) {
//         const guest = await getGuest(session.user.email);
//         session.user.guestId = guest.id;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };

// export const {
//   auth,
//   signIn,
//   signOut,
//   handlers: { GET, POST },
// } = NextAuth(authConfig);

// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import { createGuest, getGuest } from "./data-service";
// import type { DefaultSession, AuthOptions } from "next-auth";

// // Extend the built-in session types
// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     user: {
//       email: string;
//       name?: string;
//       guestId?: string;
//     } & DefaultSession["user"];
//   }
// }

// const authConfig: AuthOptions = {
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID as string,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
//     }),
//   ],
//   callbacks: {
//     async signIn({
//       user,
//       profile,
//       account,
//     }: {
//       user: any;
//       profile?: any;
//       account?: any;
//     }): Promise<boolean> {
//       try {
//         if (!user.email) return false;

//         const existingGuest = await getGuest(user.email);

//         if (!existingGuest)
//           await createGuest({
//             email: user.email,
//             fullName: user.name || "",
//           });

//         return true;
//       } catch {
//         return false;
//       }
//     },
//     async session({
//       session,
//       user,
//     }: {
//       session: any;
//       user: any;
//     }): Promise<any> {
//       if (session.user?.email) {
//         const guest = await getGuest(session.user.email);
//         session.user.guestId = guest.id;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };

// export const {
//   auth,
//   signIn,
//   signOut,
//   handlers: { GET, POST },
// } = NextAuth(authConfig);

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";
import type { DefaultSession, AuthOptions } from "next-auth";
import type { NextRequest } from "next/server";

// Extend the built-in session types
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      email: string;
      name?: string;
      guestId?: string;
    } & DefaultSession["user"];
  }
}

const authConfig: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({
      user,
      profile,
      account,
    }: {
      user: any;
      profile?: any;
      account?: any;
    }): Promise<boolean> {
      try {
        if (!user.email) return false;

        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({
            email: user.email,
            fullName: user.name || "",
          });

        return true;
      } catch {
        return false;
      }
    },
    async session({
      session,
      user,
    }: {
      session: any;
      user: any;
    }): Promise<any> {
      if (session.user?.email) {
        const guest = await getGuest(session.user.email);
        session.user.guestId = guest.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

// Create the NextAuth handler
const nextAuthHandler = NextAuth(authConfig);

// Export the auth helpers
export const { auth, signIn, signOut } = nextAuthHandler;

// Export typed route handlers for the App Router
export const GET: (req: NextRequest) => Promise<Response> = nextAuthHandler.GET;
export const POST: (req: NextRequest) => Promise<Response> =
  nextAuthHandler.POST;
