import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import {Head, useForm} from '@inertiajs/inertia-react';
import {Button, Input} from "@material-tailwind/react";
import React from "react";
import route from "ziggy-js";

export default function ForgotPassword({status}) {
    const {data, setData, post, processing, errors} = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password"/>

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>

                <Input label={"Email"}
                       onChange={onHandleChange}
                       name="email"
                       value={data.email}
                       type='email'
                />

                <InputError message={errors.email} className="mt-2"/>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" type="submit" disabled={processing}>Email Password Reset Link</Button>
                </div>
            </form>
        </GuestLayout>
    );
}
