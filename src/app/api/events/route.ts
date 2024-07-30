'use server';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/connect';
import next, { NextApiRequest } from 'next';
import { GetDecoded } from '@/app/function/CheckToken';


export const GET = async (req: NextApiRequest, res: Response) => {
  
  try {
    let params = new URL(req.url).searchParams;
    let id = params.get('id') || null;
    const events = await prisma.event.findMany({
      skip: parseInt(params.get('page')) || 0,
      take: 9,
      include: {
        Image: true,
      },
      orderBy: {
        id : 'desc'
      },
      where: {
        id: id ? parseInt(id) : undefined,
      },
    });

    const counts = await prisma.event.count();

    return NextResponse.json({ data: events , count: counts }, { status: 200 });
  } catch (error) {
    
    return NextResponse.json({ error: error }, { status: 500 });
  }
}


export const POST = async (req: Request, res: Response) => {
  const token = req.headers.get("Authorization")?.split(" ")[1] ?? null;
  if(token == null || token == 'null' || token == 'undefined' || token == undefined){
    return NextResponse.json({ message: "You are not authorized" }, { status: 401 });
  }

  let user_data = await GetDecoded(token);

  if(user_data.type != 'admin'){
    return NextResponse.json({ message: "You are not authorized" }, { status: 401 });
  }
  
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
        userId : parseInt(data.userId),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    console.log(event);
    let multiple_i = data.image.map((i) => {
      if (i.data_url) {
        let file = i.data_url.split(';base64,').pop();
        return {
          file: file,
          eventid: event.id,
          receiptid: null,
          stepid: null,
      };
      }
      }
  );
    const images = await prisma.image.createMany({
        data: multiple_i,
    });

    return NextResponse.json({ event: event, images: images }, { status: 200 });
  } catch (error) {
    
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
