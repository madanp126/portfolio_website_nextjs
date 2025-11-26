import { RequestLifecycleOpts } from "next/dist/server/base-server";
import { NextResponse } from "next/server";

export function middleware(req:Request){
    const token =req.headers.get("cookie")?.includes("token");
    if(!token && req.url.includes("/dashboard")){
        return NextResponse.redirect(new URL("/login",req.url));
    }
    return NextResponse.next();
}

export const config ={
    matcher:["/dashboard/:path*"],
};