'use server';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/connect';




export const POST = async (req: Request, res: Response) => {
  try {
    let data = await req.json();
    const event = 
    await prisma.event.create({
      data: {
        title: data.title,
        description: data.description,
        date_start: new Date(data.date_start),
        date_end: new Date(data.date_end),
        adress: data.adress,
        zip: data.zip,
        city: data.city,
        country: data.country,
        userId : 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    let multiple_i = data.image.map((i) => {
        return {
            file: btoa(i),
            eventid: event.id,
            receiptid: null,
            stepid: null,
        };
        }
    );
    const images = await prisma.image.createMany({
        data: multiple_i,
    });

    return NextResponse.json({ event: event, images: images }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
