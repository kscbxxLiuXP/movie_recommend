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
import axios from 'axios';
import { address, address_cold_start, address_user } from '../../utils/api';
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
  
  const RegistrationForm = ({occupation}) => {
    const [form] = Form.useForm();
    
    const ageLevel =(age)=>{
        if(age<=18){
            return 1
        }else if(age>18 &&age<=40){
            return 2
        }else if(age>40 &&age<=65){
            return 3
        }else{
            return 4
        }
    }
    const onFinish = (values) => {
        values.zipcode=0
        axios(
            {
                url:address_user+"/user/registration",
                method:'get',
                params:values
            }
        ).then(res=>{
            console.log(res.data);
            message.success("注册成功")
            // form.resetFields()
            let cold={
                userId : parseInt(res.data.data) ,
                gender : values.gender==='M'?0:1,
                age : ageLevel( parseInt(values.age)),
                occupation : values.occupation,
            }
            axios({
                url:address_cold_start+"/coldstart",
                method:"post",
                data:cold,
            }).then(res=>{
                console.log(res);
                message.success("新用户冷启动完成")
            })
            console.log(cold);
        }
        )
     
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
      
        <Form.Item name="age" label="年龄" rules={[{ required: true, message: '请输入年龄!' }]}>
        <Input  />
      </Form.Item>
      <Form.Item name="gender" label="性别"  rules={[{ required: true, message: '选择性别!' }]}>
        <Radio.Group>
          <Radio value="M">男</Radio>
          <Radio value="F">女</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="occupation"
        label="职业"
        hasFeedback
        rules={[{ required: true, message: '请选择您的职业!' }]}
      >
        <Select placeholder="请选择职业">
            {occupation.map((item,index)=>{
                return    <Option key={index} value={item.id}>{item.occupation}</Option>
            })}
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
    constructor(props){
        super(props)
        this.state={
            occupation:[]
        }
    }
    componentDidMount(){
        axios({
            url:address_user+"/user/getOccupationList",
            method:'get'
        }).then(res=>{
            console.log(res.data);
            this.setState({
                occupation:res.data.data
            })
        })

    //   let occupation=[
    //     {
    //     id:1,
    //     name:"教师",
    //     },
    //     {
    //         id:2,
    //         name:"学生",
    //         },
    // ]
    // this.setState({
    //     occupation:occupation
    // })
  }
    render() {
        return (
            <div className="register-wrapper">
                <div className="register-title">
                注册
                
                </div>
                <Divider/>
                <RegistrationForm occupation={this.state.occupation} onFinish/>
                
            </div>
        )
    }
}
