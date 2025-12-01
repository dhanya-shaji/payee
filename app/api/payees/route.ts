import prisma from '../../lib/prisma'

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payees = await prisma.payee.findMany();
    return NextResponse.json(payees);
  } catch (error) {
    console.error("Error fetching payees:", error);
    return NextResponse.json({ error: "Failed to fetch payees" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const data = await req.json();
  const newPayee = await prisma.payee.create({ data });
  return NextResponse.json(newPayee);
}
