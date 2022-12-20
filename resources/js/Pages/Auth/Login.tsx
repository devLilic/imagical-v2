import React, {ChangeEvent, FormEvent, useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import {Button, Checkbox, Input} from "@material-tailwind/react";
import route from "ziggy-js";

interface ILoginProps {
    status: string
    canResetPassword: boolean
}

export default function Login({status, canResetPassword}: ILoginProps) {

    const initialValues = {
        email: '',
        password: '',
        remember: '',
    }

    const {data, setData, post, processing, errors, reset} = useForm(initialValues);

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name as keyof typeof initialValues
        setData(fieldName, event.target.type === 'checkbox' ? event.target.checked.toString() : event.target.value);
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in"/>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <Input label={"Email"}
                           onChange={onHandleChange}
                           name="email"
                           value={data.email}
                           type='email'
                           autoComplete='username'
                    />

                    <InputError message={errors.email} className="mt-2"/>
                </div>

                <div className="mt-4">
                    <Input label="Password"
                           type="password"
                           name="password"
                           value={data.password}
                           autoComplete="password"
                           onChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2"/>
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} onChange={onHandleChange}/>
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('register')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-auto"
                    >
                        Register
                    </Link>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button className="ml-4" type="submit" disabled={processing}>Log in</Button>

                </div>
            </form>
        </GuestLayout>
    );
}
