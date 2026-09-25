"use server";

import { cookies } from "next/headers";

export async function loginAction(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const validUsername = process.env.ADMIN_USERNAME || "founder";
  const validPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (username === validUsername && password === validPassword) {
    cookies().set("admin_auth", "true", { httpOnly: true, secure: process.env.NODE_ENV === "production", path: "/" });
    return { success: true };
  } else {
    return { success: false, error: "Invalid username or password" };
  }
}

export async function logoutAction() {
  cookies().delete("admin_auth");
}
