'use server';
import { NextResponse } from "next/server";
import prisma from "../../../lib/connect";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


export const POST = async (req: Request, res: Response) => {

    try {
        let data = await req.json();
        const email = data.email;
        const password = data.password;
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 400 });
            
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return NextResponse.json({ message: "Invalid password" }, { status: 400 });
        }
        const token = jwt.sign({ userId: user.id, type : user.type }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        let user_json = {
            id: user.id,
            email: user.email,
            name: user.name,
            date_subscription: user.date_subscription,
            type: user.type,
        }

        return NextResponse.json({ token: token, user : user_json }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }

}