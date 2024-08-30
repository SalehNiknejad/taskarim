"use client";
import React from "react";
import { Avatar, Card } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

function TaskCard() {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
        }
        actions={[
          <LaptopOutlined key="setting" onClick={() => alert("test")} />,
          <NotificationOutlined key="edit" />,
          <UserOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title="این یک نمونه تستی است"
          description="توضیحات به این صورت است"
        />
      </Card>
    </div>
  );
}

export default TaskCard;
