import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export const middleware = async (req) => {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  // Allow the requests if the following is true
  const { pathname } = req.nextUrl;
  // console.log(pathname.includes('/api/auth'))

  if (pathname.includes("api/auth") || token) {
    NextResponse.next();
  }

  if(!token && pathname !== '/login'){
    
    const url = await req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.rewrite(url)
  }
};
