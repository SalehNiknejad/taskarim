"use client";

import React, { FC } from "react";
import { Button, Form, Grid, Input, theme } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { useToken } = theme;
const { useBreakpoint } = Grid;

export type AuthFormProps = {
  title?: string;
};

const AuthForm: FC<AuthFormProps> = ({ title }) => {
  const { token } = useToken();
  const screens = useBreakpoint();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
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
          <label className="font-bold text-blue-950">{title}</label>
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
        </Form>
      </div>
    </section>
  );
};

export default AuthForm;
