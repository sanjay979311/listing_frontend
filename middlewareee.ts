// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// // Define protected routes
// const protectedRoutes = ["/dashboard", "/profile", "/posts"];
// const guestRoutes = ["/login", "/register"];

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value; // Assuming you store auth token in cookies
//   console.log("token is ========>",token)
//   const { pathname } = req.nextUrl;

//   // Redirect unauthenticated users trying to access protected routes
//   if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/login";
//     return NextResponse.redirect(url);
//   }

//   // Redirect logged-in users trying to access guest routes
//   if (guestRoutes.some((route) => pathname.startsWith(route)) && token) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/dashboard";
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next(); // Proceed normally
// }
