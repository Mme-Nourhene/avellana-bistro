import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();

    const name = data.get('name') as string;
    const businessType = data.get('businessType') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const socials = data.get('socials') as string;
    const message = data.get('message') as string;
    const logo = data.get('logo') as File | null;

    if (!name || !businessType || !email || !phone || !socials || !message || !logo) {
      return NextResponse.json({ success: false, error: 'Champs manquants' }, { status: 400 });
    }

    // Création du transporteur d'e-mails
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Convertir le logo en pièce jointe
    const logoBuffer = Buffer.from(await logo.arrayBuffer());

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `Nouvelle demande de partenariat - ${name}`,
      text: `
👤 Nom / Business : ${name}
🏷️ Type de business : ${businessType}
📧 Email : ${email}
📞 Téléphone : ${phone}
🔗 Réseaux / Site : ${socials}

💬 Message :
${message}
      `,
      attachments: [
        {
          filename: logo.name,
          content: logoBuffer,
          contentType: logo.type,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur envoi e-mail créateur:', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}
