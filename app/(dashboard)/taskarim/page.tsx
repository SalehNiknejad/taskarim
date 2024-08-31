import TaskCard from "@/app/components/TaskCard/TaskCard";
import React from "react";

function page() {
  return (
    <main>
      <h1 className="text-2xl mb-10">تسکریم پلتفرم مدیریت تسک هوشمند</h1>
      <div className="flex-wrap flex gap-6 ">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </main>
  );
}

export default page;
