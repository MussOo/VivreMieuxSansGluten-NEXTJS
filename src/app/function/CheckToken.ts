
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";




export const CheckToken = async (token: string) => {
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });
        } else {
            return decoded;
        }
    } );

}

export const GetDecoded = async (token: string) => {
        
        return jwt.verify(token, process.env.JWT_SECRET);


}