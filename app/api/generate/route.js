import clientPromise from "@/lib/mongodb";

export async function POST(request) {

    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc=await collection.findOne({shorturl:body.shorturl});
    if (doc) {
        return Response.json({ message: "URL already existes" ,success:false,error:true});
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    });

    return Response.json({ message: "Short URL Generated" ,success:true,error:false });
}
