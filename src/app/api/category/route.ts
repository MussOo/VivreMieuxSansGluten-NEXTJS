'use server';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/connect';



export const GET = async (req: Request, res: Response) => {
    try {
        const categories = await prisma.category.findMany();
        console.log(categories);
        return NextResponse.json({ data: categories }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}