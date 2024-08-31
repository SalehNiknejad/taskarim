"use client";

import React, { FC } from "react";
import { Button, Form, Grid, Input, theme } from "antd";
import {
  LockOutlined,
  MailOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { useToken } = theme;
const { useBreakpoint } = Grid;
export type AuthFormProps = {
  title?: string;
  createAccont: boolean;
};

const AuthForm: FC<AuthFormProps> = ({ title, createAccont }) => {
  const router = useRouter();
  const { token } = useToken();
  const screens = useBreakpoint();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    console.log(typeof values);
  };
  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "400px",
    },

    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },

    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div className="flex w-full justify-center mb-10">
            <img
              src="/images/logoBig.png"
              className="h-16"
              alt="Taskerim"
              style={{ filter: "brightness(0.75)" }}
            />
          </div>
          <div className="flex gap-2">
            {!createAccont ? <UserAddOutlined /> : <UserOutlined />}
            <label className="font-bold text-blue-950">{title}</label>
          </div>
        </div>
        <Form
          name="normal_login"
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "لطفا ایمیل خود را وارد کنید",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="ایمیل"
              className="items-center"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "لطفا رمز ورود خود را وارد کنید",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="رمز ورود"
              dir="rtl"
              className="items-center"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              block={true}
              type="primary"
              htmlType="submit"
              size="large"
              className="mt-4"
            >
              ورود
            </Button>
          </Form.Item>
          {createAccont && (
            <div className="mt-10">
              <label>حساب کاربری ندارید؟</label>
              <Button
                type="link"
                children={"ساخت حساب کاربری"}
                icon={<UserAddOutlined />}
                size="small"
                onClick={() => router.push("/signup")}
              />
            </div>
          )}
        </Form>
      </div>
    </section>
  );
};

export default AuthForm;
