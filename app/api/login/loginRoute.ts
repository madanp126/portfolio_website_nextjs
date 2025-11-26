import next from "next";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const{email,password}=await req.json();

    if (email==="madan@gmail.com" && password==="madan123"){
        return NextResponse.json({success:true,token:"dummy-token"});
    }
    return NextResponse.json({success:false,message:"invalid login"});
}