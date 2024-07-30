import { GetDecoded } from "@/app/function/CheckToken";
import { NextResponse } from "next/server";


export const GET = async (req : Request, res : Response) => {
    try {
        let params = new URL(req.url).searchParams;
        let receiptid = params.get('receiptid') ?? null;
        
        const steps = await prisma.step.findMany({
            skip: parseInt(params.get('page')) || 0,
            take: 6,
            include: {
                Image: true,
            },
            orderBy: {
                id : 'asc'
            },
            where: {
                receiptid: receiptid ? parseInt(receiptid) : undefined
            }
        });

        return NextResponse.json({ data: steps }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }

}

export const POST = async (req : Request, res : Response) => {
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
        let multiple_step = data.map(async (st) => {
            const step_flush = await prisma.step.create({
                data: {
                    title: st.title,
                    content: st.content,
                    receiptid: st.receiptid,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            });
    
            let multiple_i = st.image.map((i) => {
                if (i.data_url) {
                    let file = i.data_url.split(';base64,').pop();
                    return {
                        file: file,
                        eventid: null,
                        receiptid: null,
                        stepid: step_flush.id,
                    };
                }
            });

            const images = await prisma.image.createMany({
                data: multiple_i,
            });
        }
    );

        return NextResponse.json({ data: multiple_step }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}