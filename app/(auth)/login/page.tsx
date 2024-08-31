"use client";
import React, { FC } from "react";
import AuthForm from "@/app/components/Auth/AuthForm";
import { createClient } from "@/app/utils/supabase/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

async function signin() {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: "seyed.saleh.niknejad@gmail.com",
    password: "123456",
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
  return (
    <>
      <AuthForm title="ورود کاربر" createAccont={true} />
    </>
  );
}

export default signin;

// export async function login(formData: FormData) {

// }
