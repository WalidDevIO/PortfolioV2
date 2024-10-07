import { NextResponse } from "next/server";
import { getLast } from "@/actions/getLast";
import { getLandingText } from "@/actions/getLandingText";
import { getSkills } from "@/actions/getSkills";

export async function GET() {
    const last = await getLast();
    const landingText = await getLandingText();
    const skills = await getSkills();
    return NextResponse.json({ last, landingText, skills });
}