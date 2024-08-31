"use client";
import React from "react";
import { Result, Button } from "antd";
import { useRouter } from "next/navigation";

function notFound() {
  const router = useRouter();
  return (
    <div className="items-center  h-[100vh] flex justify-center">
      <Result
        status="500"
        title="متاسفانه مشکلی پیش آمده"
        subTitle="404 Not Found"
        extra={
          <Button type="dashed" onClick={() => router.push("/")}>
            بازگشت به صفحه اصلی
          </Button>
        }
      />
    </div>
  );
}

export default notFound;
