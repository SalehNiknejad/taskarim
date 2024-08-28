"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="h-[100vh] items-center flex-col flex justify-center">
      <Button
        type="primary"
        children={"Taskarim"}
        size="large"
        onClick={() => router.push("/taskarim")}
      />
    </main>
  );
}
