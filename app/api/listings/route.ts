import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb"
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function POST(request:Request) {
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return NextResponse.error();
    }

    const {location, ...body} = await request.json();

    const listing = await prisma.listing.create({
        data:{
            ...body,
            price: parseInt(body.price,10),
            userId: currentUser.id,
            locationValue: location.value
        }
    })

    return NextResponse.json(listing);
}