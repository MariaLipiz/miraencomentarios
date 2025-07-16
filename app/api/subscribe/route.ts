import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error adding contact:', error);
    return NextResponse.json({ error: 'Failed to add contact' }, { status: 500 });
  }
}
