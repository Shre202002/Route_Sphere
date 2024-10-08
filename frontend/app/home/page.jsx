'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';



const page = () => {

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
        <>
            <div className="flex items-center justify-between min-h-screen bg-fixed lg:bg-[url('/assets/images/Bg_login.png')] sm:bg-[url('/assets/images/Bg_login_mobile.png')] bg-no-repeat bg-center bg-cover backdrop-blur">
                {/* Left section with background image */}
                <div className="w-full lg:w-7/12 min-h-screen h-full bg-[url('/assets/images/Vector1.png')] bg-no-repeat bg-cover sm:bg-[none]  flex justify-center items-center overflow-hidden">
                    {/* Centered Form and Logo Container */}

                    <div className="flex flex-col justify-center items-center  w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-8/12 h-auto py-8 md:py-12 bg-[#f8f8f88c] rounded-lg">

                        {/* Logo and Heading */}
                        <div className="flex flex-col justify-center items-center mb-8 w-1/2">
                            <Image src="/assets/images/Logo.png" alt="Logo" width={200} height={140} className="logo_img" />
                            <h1 className=" text-xl md:text-2xl font-bold mt-4 text-black">Route Shapers</h1>
                        </div>

                        {/* Form */}
                        <Form
                            name="login"
                            layout="vertical"
                            onFinish={onFinish}
                            className="shadow-md rounded w-full sm:w-10/12"
                        >
                            {/* Username Input */}
                            <Form.Item
                                // label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please enter your username!' }]}
                            >
                                <Input placeholder="Enter your username" className='h-12 px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2' />
                            </Form.Item>

                            {/* Password Input */}
                            <Form.Item
                                // label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please enter your password!' }]}
                            >
                                <Input.Password placeholder="Enter your password" className='h-12 px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2' />
                            </Form.Item>

                            {/* Submit Button */}
                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={loading} block>
                                    Log In
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default page;
