import React, {ChangeEvent, FormEvent, useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import { Head, useForm } from '@inertiajs/inertia-react';
import {Button, Input} from "@material-tailwind/react";
import route from "ziggy-js";

interface IResetPassword{
    token: string
    email: string
}

interface FormData extends IResetPassword {
    password: string
    password_confirmation: string
}

export default function ResetPassword({ token, email }: IResetPassword) {
    const defaultFormData: FormData = {
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    }
    const { data, setData, post, processing, errors, reset } = useForm(defaultFormData);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit}>
                <div>
                    <Input label={"Email"}
                           onChange={onHandleChange}
                           name="email"
                           value={data.email}
                           type='email'
                           autoComplete='username'
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Input label="Password"
                           type="password"
                           name="password"
                           value={data.password}
                           autoComplete="new-password"
                           onChange={onHandleChange}
                           autoFocus={true}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Input label="Confirm Password"
                           type="password"
                           name="password_confirmation"
                           value={data.password_confirmation}
                           onChange={onHandleChange}
                           autoComplete="new-password"
                           required={true}
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" type="submit" disabled={processing}>Reset Password</Button>
                </div>
            </form>
        </GuestLayout>
    );
}
