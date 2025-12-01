/* import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(_: Request, { params }: any) {
  const payee = await prisma.payee.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(payee);
}

export async function PUT(req: Request, { params }: any) {
  const data = await req.json();
  const updated = await prisma.payee.update({
    where: { id: params.id },
    data
  });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: any) {
  await prisma.payee.delete({ where: { id: params.id } });
  return NextResponse.json({ message: "Payee deleted" });
}
 */