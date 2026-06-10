"use server";

import nodemailer from "nodemailer";

export interface DealerFormState {
    status: "idle" | "success" | "error";
    message: string;
}

export async function submitDealerApplication(
    _prevState: DealerFormState,
    formData: FormData
): Promise<DealerFormState> {
    const name = formData.get("name")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const location = formData.get("location")?.toString().trim() ?? "";
    const monthlyDemand = formData.get("monthlyDemand")?.toString().trim() ?? "";

    if (!name || !phone || !location) {
        return { status: "error", message: "Name, phone, and location are required." };
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
            subject: `New Dealer Application — ${name} (${location})`,
            text: [
                `Name / Business:  ${name}`,
                `Phone:            ${phone}`,
                `Location:         ${location}`,
                `Monthly Demand:   ${monthlyDemand || "—"}`,
            ].join("\n"),
            html: `
                <h2>New Dealer Application</h2>
                <p><strong>Name / Business:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Monthly Demand:</strong> ${monthlyDemand || "—"}</p>
            `,
        });

        return { status: "success", message: "Application received! Our sales manager will contact you within 24 hours." };
    } catch (err) {
        console.error("Dealer form email error:", err);
        return { status: "error", message: "Could not submit your application. Please call us directly at +977-9801412266." };
    }
}
