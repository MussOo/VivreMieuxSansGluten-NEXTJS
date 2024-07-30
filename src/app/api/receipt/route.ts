'use server';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/connect';
import next, { NextApiRequest } from 'next';
import { CheckToken, GetDecoded } from "@/app/function/CheckToken";


export const GET = async (req: NextApiRequest, res: Response) => {

  let IsFree = true;
  const token = req.headers.get("Authorization")?.split(" ")[1] ?? null;
  if(token != null && token != 'null' && token != 'undefined' && token != undefined){
    console.log('dzaiuhdaziuo', token);
    let user_data = await GetDecoded(token);
    IsFree = undefined;
  }
  try {
    let params = new URL(req.url).searchParams;
    let category = params.get('category') ?? null;
    let id = params.get('id') ?? null;
    const events = await prisma.receipt.findMany({
      skip: parseInt(params.get('page')) || 0,
      take: 6,
      include: {
        Image: true,
      },
      orderBy: {
        id : 'desc'
      },
      where: {
        categoryId: category ? parseInt(category) : undefined,
        id: id ? parseInt(id) : undefined,
        IsFree : IsFree ? IsFree : undefined

      }
    });
    
    const counts = await prisma.receipt.count({
      where: {
        categoryId: category ? parseInt(category) : undefined,
      }
    });

    return NextResponse.json({ data: events , count: counts }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}


export const POST = async (req: Request, res: Response) => {
  const token = req.headers.get("Authorization")?.split(" ")[1] ?? null;
  if(token != null && token != 'null' && token != 'undefined' && token != undefined){
    return NextResponse.json({ message: "You are not authorized" }, { status: 401 });
  }

  let user_data = await GetDecoded(token);

  if(user_data.type != 'admin'){
    return NextResponse.json({ message: "You are not authorized" }, { status: 401 });
  }
  try {
    let data = await req.json();
    const receipt = await prisma.receipt.create({
      data: {
        title: data.title,
        description: data.description,
        date : new Date(),
        IsFree : data.IsFree,
        amount : 0,
        userId : parseInt(data.userId),
        categoryId : data.category,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    let multiple_i = data.image.map((i) => {
      if (i.data_url) {
        let file = i.data_url.split(';base64,').pop();
        return {
          file: file,
          eventid: null,
          receiptid: receipt.id,
          stepid: null,
      };
      }
      }
  );

    const images = await prisma.image.createMany({
        data: multiple_i,
    });


    return NextResponse.json({ data: receipt }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}