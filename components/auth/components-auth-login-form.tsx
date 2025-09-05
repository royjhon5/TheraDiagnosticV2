'use client';
import IconLockDots from '@/components/icon/icon-lock-dots';
import IconMail from '@/components/icon/icon-mail';
import IconUser from '@/components/icon/icon-user';
import useSignIn from '@/hooks/user/useSignIn';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ComponentsAuthLoginForm = () => {
    const router = useRouter();
    const submitForm = (e: any) => {
        e.preventDefault();
        router.push('/');
    };

    const { onSubmit } = useSignIn();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="space-y-5 dark:text-white" onSubmit={submitForm}>
            <div>
                <label htmlFor="username">Username</label>
                <div className="relative text-white-dark">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter Username"
                        className="form-input ps-10 placeholder:text-white-dark"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                        <IconUser fill={true} />
                    </span>
                </div>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <div className="relative text-white-dark">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        className="form-input ps-10 placeholder:text-white-dark"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span className="absolute start-4 top-1/2 -translate-y-1/2">
                        <IconLockDots fill={true} />
                    </span>
                </div>
            </div>
            <button
                onClick={handleSubmit}
                type="submit"
                className="btn bg-[linear-gradient(225deg,rgba(18,139,40,1)_0%,rgba(67,97,238,1)_100%)] !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
            >
                Sign in
            </button>
        </form>
    );
};

export default ComponentsAuthLoginForm;
