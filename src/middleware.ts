import { auth } from "@/auth";

export default auth((req) => {

  const isAdminRoute =
    req.nextUrl.pathname.startsWith(
      "/admin"
    );

  if (
    isAdminRoute &&
    req.auth?.user?.email !==
    "dasunkalharaofficialverifi@gmail.com"
  ) {

    return Response.redirect(
      new URL(
        "/login",
        req.nextUrl.origin
      )
    );

  }

});

export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*"
  ]
};
