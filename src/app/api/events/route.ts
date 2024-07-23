'use server';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/connect';
import next, { NextApiRequest } from 'next';


export const GET = async (req: NextApiRequest, res: Response) => {
  try {
    let params = new URL(req.url).searchParams;
    const events = await prisma.event.findMany({
      skip: parseInt(params.get('page')) || 0,
      take: 6,
      include: {
        Image: true,
      },
      orderBy: {
        id : 'desc'
      }
    });

    return NextResponse.json({ data: events }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}


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
            file: i,
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
