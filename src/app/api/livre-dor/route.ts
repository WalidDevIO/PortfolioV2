import { createMessage, acceptMessage, deleteMessage } from "@/actions/livredor";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const message = await request.json();
    await createMessage(message);
    return NextResponse.json(message);
}

export async function PUT(request: NextRequest) {
    const message = await request.json();
    await acceptMessage(message);
    return NextResponse.json(message);
}

export async function DELETE(request: NextRequest) {
    const { id } = await request.json();
    await deleteMessage(id);
    return NextResponse.json({ id });
}