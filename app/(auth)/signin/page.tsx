import React from "react";
import AuthForm from "@/app/components/Auth/AuthForm";

function signin() {
  return (
    <>
      <AuthForm title="ورود کاربر" createAccont={true} />
    </>
  );
}

export default signin;
