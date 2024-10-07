import { getContact } from "@/actions/getContact";
import { NextResponse } from "next/server";

export async function GET() {
    const contact = await getContact();
    return NextResponse.json(contact);
}