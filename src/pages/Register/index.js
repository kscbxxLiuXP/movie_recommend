import React, { Component } from 'react'
import './style.css'
import {
    Form,
    Input,
    Button,
    Divider,
    DatePicker,
    Radio,
    Select,
    message
  } from 'antd';
  const {Option} = Select
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  const RegistrationForm = () => {
    const [form] = Form.useForm();
  
    const onFinish = (values) => {
        message.success("注册成功")
        form.resetFields()
         console.log('Received values of form: ', values);
    };
  

   
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="username"
          label="用户名"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请确认你的密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject('两次输入的密码不一致!');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
          <Divider >个性化信息</Divider>
      
        <Form.Item name="birth" label="生日" rules={[{ required: true, message: '选择生日!' }]}>
        <DatePicker  format="YYYY-MM-DD" />
      </Form.Item>
      <Form.Item name="gender" label="性别"  rules={[{ required: true, message: '选择性别!' }]}>
        <Radio.Group>
          <Radio value="男">男</Radio>
          <Radio value="女">女</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="job"
        label="职业"
        hasFeedback
        rules={[{ required: true, message: '请选择您的职业!' }]}
      >
        <Select placeholder="请选择职业">
          <Option value="teacher">教师</Option>
          <Option value="student">学生</Option>
        </Select>
      </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册

          </Button>
        </Form.Item>
      </Form>
    );
  };
export default class Register extends Component {
    render() {
        return (
            <div className="register-wrapper">
                <div className="register-title">
                注册
                
                </div>
                <Divider/>
                <RegistrationForm onFinish/>
                
            </div>
        )
    }
}
