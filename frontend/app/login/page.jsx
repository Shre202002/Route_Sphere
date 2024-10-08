'use client'
// pages/login.js
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Send login data to the backend
      const response = await axios.post('/api/login', {
        username: values.username,
        password: values.password,
      });

      // Get token from the response
      const token = response.data.token;

      // Store token in localStorage or handle login success
      localStorage.setItem('token', token);
      message.success('Login successful!');
      
      // You can redirect the user after login if necessary
      window.location.href = '/dashboard'; 
      
    } catch (error) {
      message.error('Login failed! Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        className="p-6 bg-white shadow-md rounded"
        style={{ width: 300 }}
      >
        <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
        
        {/* Username Input */}
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        {/* Password Input */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
