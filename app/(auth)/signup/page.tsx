import AuthForm from "@/app/components/Auth/AuthForm";
import React from "react";

function signup() {
  return <AuthForm title="ثبت نام کاربر" createAccont={false} />;
}

export default signup;
