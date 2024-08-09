'use client'

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Mentions } from 'antd'
import Link from 'next/link'


import axios from 'axios'
import { toast } from "react"
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const router = useRouter()

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })

    const [buttonDisabled, setButtonDisabled] = useState
        (false)
    const [loading, setLoading] = useState(false)

    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup", user)
            console.log("Signup success", response.data);
            router.push('/login')


        } catch (error: any) {
            console.log("Signup failed");
            toast.error(error.message)
        }


    }
    const options = [{ value: 'sample', label: 'sample' }];
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }

    }, [user])


    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>{loading ? "Processing" : "Signup"}</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
                id='username'
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder='username'
                type="text" />
            <label htmlFor="email">email</label>
            <input
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
                id='email'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder='email'
                type="text" />
            <label htmlFor="password">password</label>
            <input
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
                id='password'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder='password'
                type="password" />
            <button
                onClick={onSignup}
                className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black hover:text-teal-700 duration-300'
            >
                {buttonDisabled ? "No signup" : "Signup"}
            </button>
            <Link href="/login" className='hover:text-teal-700 duration-300'>Visit Login Page</Link>

        </div>
    );
}

