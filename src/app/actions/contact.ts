"use server";

import nodemailer from "nodemailer";

export interface ContactFormState {
    status: "idle" | "success" | "error";
    message: string;
}

export async function submitContactForm(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = formData.get("name")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    if (!name || !message) {
        return { status: "error", message: "Name and message are required." };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Nandani Agro Website" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
            replyTo: email || undefined,
            subject: `New Contact Form Submission from ${name}`,
            text: [
                `Name:    ${name}`,
                `Phone:   ${phone || "—"}`,
                `Email:   ${email || "—"}`,
                "",
                "Message:",
                message,
            ].join("\n"),
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone || "—"}</p>
                <p><strong>Email:</strong> ${email || "—"}</p>
                <hr/>
                <p><strong>Message:</strong></p>
                <p style="white-space:pre-wrap">${message}</p>
            `,
        });

        return { status: "success", message: "Thank you! We will get back to you within 24 hours." };
    } catch (err) {
        console.error("Contact form email error:", err);
        return { status: "error", message: "Could not send your message. Please call us directly at +977-9801412266." };
    }
}
