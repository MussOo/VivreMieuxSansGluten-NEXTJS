'use server';
import prisma from '@/lib/connect';
import { CheckToken, GetDecoded } from "@/app/function/CheckToken";
import { NextResponse } from 'next/server';

export const GET = async (req : Request) => {
    const token = req.headers.get("Authorization").split(" ")[1] || "";
    CheckToken(token);
    let user_data = await GetDecoded(token);
    try {
        let user = await prisma.user.findUnique({
            where : {
                id : user_data.userId,
                type : user_data.type,
            }
        });

        if(!user){
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        let user_json = {
            id: user.id,
            email: user.email,
            name: user.name,
            date_subscription: user.date_subscription,
            type: user.type,
        }

        return NextResponse.json({ user : user_json }, { status: 200 });
    } catch (error) {
        console.error(error);
    }
}