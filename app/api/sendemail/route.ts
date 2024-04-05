import { EmailTemplate } from "@/components/ui/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name) {
      return new NextResponse("name required", { status: 400 });
    }
    if (!email) {
      return new NextResponse("email required", { status: 400 });
    }
    if (!message) {
      return new NextResponse("message required", { status: 400 });
    }

    // @ts-ignore
    const { data, error } = await resend.emails.send({
      from: `${name} shows interest in your portfolio! <onboarding@resend.dev>`,
      to: "developer.vicky6@gmail.com",
      reply_to: `${email}`,
      subject: `${message}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return new NextResponse("Email server is down, try again 🙏", {
        status: 500,
      });
    }

    return new NextResponse("Email sent successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
