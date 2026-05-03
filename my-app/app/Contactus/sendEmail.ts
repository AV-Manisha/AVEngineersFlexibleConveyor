"use server";

import { resend } from "@/lib/resend";

export async function submitContactForm(formData: FormData) {
    console.log("Form data received:", {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        message: formData.get("message")
    });

    const { data, error } = await resend.batch.send([
        // Email to user
        {
            from: "Acme <onboarding@resend.dev>",
            to: [formData.get("email") as string],
      subject: "We received your message",
    //   react: ConfirmationEmail({ ... }),
    },
    
  ]);

  return { success: !error };
}