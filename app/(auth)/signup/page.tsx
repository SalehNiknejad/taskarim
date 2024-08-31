"use client";
import AuthForm from "@/app/components/Auth/AuthForm";
import React from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";

async function signup() {
  const supabase = createClient();

  const sa = {
    email: "saleh@gmail.com",
    password: "123456",
  };
  const { data, error } = await supabase.auth.signInWithPassword(sa);

  if (error) {
    // redirect("/error");
    console.log(error);
  }
  console.log(data);
  // revalidatePath("/", "layout");
  // redirect("/");

  return <AuthForm title="ثبت نام کاربر" createAccont={false} />;
}

export default signup;
