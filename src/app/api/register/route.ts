
'use server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/connect';

export const POST = async (req: Request, res: Response) => {
    try{
        let data = await req.json();
        const email = data.email;
        const password = data.password;
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        if (user) {
            return NextResponse.json({ message: "Email already exists" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        let date = new Date();
        date.setMonth(date.getMonth() + 12);

        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: 'John Doe',
                password: hashedPassword,
                type: "adherent",
                date_subscription: new Date(date),
                password_reset: false,
                createdAt: new Date(),
                updatedAt: new Date(),
    
            },
        });
        const token = jwt.sign({ 
            userId: newUser.id,
            userType: newUser.type
         }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        return NextResponse.json({ token: token, user_id: newUser.id, user_type: newUser.type }, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }

}